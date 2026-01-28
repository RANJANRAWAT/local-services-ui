import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const VideoCall = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();

    // Unique room name to avoid conflicts on the public server
    // Prefixing with 'LocalServicesApp' makes it more unique
    const roomName = `LocalServicesApp-${roomId}`;

    return (
        <div className="w-full h-screen bg-gray-900 flex flex-col">
            {/* Header / Back Button */}
            <div className="bg-gray-800 p-4 flex justify-between items-center text-white">
                <h1 className="text-xl font-bold">Video Session</h1>
                <button
                    onClick={() => navigate('/dashboard')}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-bold transition"
                >
                    End Call & Return
                </button>
            </div>

            {/* Jitsi Meet IFrame */}
            <div className="flex-1 w-full h-full relative">
                <iframe
                    allow="camera; microphone; fullscreen; display-capture; autoplay"
                    src={`https://meet.jit.si/${roomName}#config.prejoinPageEnabled=false`}
                    style={{ height: '100%', width: '100%', border: 0 }}
                    title="Jitsi Meet Video Call"
                ></iframe>
            </div>
        </div>
    );
}

export default VideoCall;
