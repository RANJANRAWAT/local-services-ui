
import fetch from 'node-fetch';

// Mock browser globals for the test - we need to redefine them so they work in node
global.fetch = fetch;

// Node 20+ has built-in AbortController, so we don't need to mock it.
// If fetch expects a specific signal type, using the native one is best.

const instances = [
    "https://inv.tux.pizza",
    "https://invidious.jing.rocks",
    "https://vid.puffyan.us",
    "https://invidious.nerdvpn.de",
    "https://inv.nadeko.net",
    "https://invidious.privacydev.net"
];

async function testSearch(query) {
    console.log(`Searching for "${query}"...`);

    for (const instance of instances) {
        try {
            console.log(`Trying ${instance}...`);
            const controller = new AbortController();
            const timeout = setTimeout(() => {
                controller.abort();
            }, 5000);

            try {
                const response = await fetch(`${instance}/api/v1/search?q=${encodeURIComponent(query)}&type=video`, {
                    signal: controller.signal
                });

                clearTimeout(timeout);

                if (response.ok) {
                    const data = await response.json();
                    console.log(`✅ Success from ${instance}! Found ${data.length} results.`);
                    return; // Stop after first success
                } else {
                    console.log(`❌ Error from ${instance}: Status ${response.status}`);
                }
            } catch (innerError) {
                clearTimeout(timeout);
                throw innerError;
            }

        } catch (error) {
            if (error.name === 'AbortError') {
                console.log(`❌ Timeout from ${instance} (exceeded 5000ms)`);
            } else {
                console.log(`❌ Failed to fetch from ${instance}: ${error.message}`);
            }
        }
    }
    console.log("All instances failed.");
}

testSearch("React JS");
