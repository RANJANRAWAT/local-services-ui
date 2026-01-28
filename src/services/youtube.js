export const searchVideos = async (query) => {
    // List of Invidious instances to try (in case one is down)
    // These are public instances.
    const instances = [
        "https://inv.tux.pizza",
        "https://invidious.jing.rocks",
        "https://vid.puffyan.us",
        "https://invidious.nerdvpn.de",
        "https://inv.nadeko.net",
        "https://invidious.privacydev.net"
    ];

    for (const instance of instances) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

            const response = await fetch(`${instance}/api/v1/search?q=${encodeURIComponent(query)}&type=video`, {
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (response.ok) {
                const data = await response.json();
                // Return mapped data to ensure consistent format
                return data.map(video => ({
                    id: video.videoId,
                    title: video.title,
                    thumbnail: video.videoThumbnails?.[0]?.url || `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`,
                    channel: video.author,
                    views: video.viewCount,
                    published: video.publishedText,
                    instance: instance // Store instance to use for embed link if needed
                }));
            }
        } catch (error) {
            console.warn(`Failed to fetch from ${instance}:`, error.name === 'AbortError' ? 'Timeout' : error.message);
            // Continue to next instance
        }
    }

    throw new Error("All Invidious instances are currently unavailable. Please try again later.");
};
