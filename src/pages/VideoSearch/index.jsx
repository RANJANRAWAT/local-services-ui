import React, { useState } from 'react';
import { FaSearch, FaPlay, FaTimes } from 'react-icons/fa';
import { searchVideos } from '../../services/youtube';
import Footer from '../../components/Footer';

const VideoSearch = () => {
    const [query, setQuery] = useState('');
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSearch = async (e) => {
        e?.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setError(null);
        setVideos([]);

        try {
            const results = await searchVideos(query);
            setVideos(results);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-pink-600 p-8 pb-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold text-white mb-2">Video Library</h1>
                    <p className="text-white/80 mb-8">Search and watch ad-free educational videos</p>

                    <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for tutorials, courses..."
                            className="w-full pl-6 pr-14 py-4 rounded-full text-lg shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-300"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="absolute right-2 top-2 bottom-2 bg-red-500 hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition disabled:opacity-50"
                        >
                            {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <FaSearch />}
                        </button>
                    </form>
                </div>
            </div>

            {/* Results Grid */}
            <div className="flex-1 max-w-7xl mx-auto px-6 -mt-10 mb-12 w-full">
                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center shadow-sm mb-6">
                        {error}
                    </div>
                )}

                {videos.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                onClick={() => setSelectedVideo(video)}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group"
                            >
                                <div className="relative aspect-video">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-red-600 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition duration-300">
                                            <FaPlay className="ml-1" />
                                        </div>
                                    </div>
                                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                        HD
                                    </span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-800 line-clamp-2 mb-2 group-hover:text-red-600 transition">
                                        {video.title}
                                    </h3>
                                    <div className="flex justify-between items-center text-xs text-gray-500">
                                        <span className="font-medium">{video.channel}</span>
                                        <span>{video.published}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!loading && videos.length === 0 && !error && (
                    <div className="text-center py-20 text-gray-400">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                            📺
                        </div>
                        <p>Start searching to find videos.</p>
                    </div>
                )}
            </div>

            <Footer />

            {/* Video Player Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className="bg-black w-full max-w-5xl aspect-video rounded-2xl overflow-hidden relative shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 z-10 text-white/50 hover:text-white bg-black/50 hover:bg-red-600 rounded-full p-2 transition"
                        >
                            <FaTimes size={24} />
                        </button>

                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&modestbranding=1&rel=0`}
                            title={selectedVideo.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoSearch;
