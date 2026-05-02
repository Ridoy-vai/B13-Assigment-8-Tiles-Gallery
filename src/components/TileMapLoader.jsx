"use client";
import React from 'react';

const TileMapLoader = ({ minHeight = "400px", text = "Loading Collection" }) => {
    return (
        <div 
            className="w-full flex flex-col items-center justify-center bg-gray-50/50 rounded-3xl border-2 border-dashed border-gray-100"
            style={{ minHeight: minHeight }}
        >
            <div className="relative">
                <div className="grid grid-cols-3 gap-1.5 p-4 bg-white shadow-xl rounded-xl rotate-12">
                    {[...Array(9)].map((_, i) => (
                        <div 
                            key={i}
                            className="w-6 h-6 bg-blue-600 rounded-xs"
                            style={{
                                animation: `tilePulse 1.5s infinite ease-in-out`,
                                animationDelay: `${i * 0.1}s`,
                            }}
                        ></div>
                    ))}
                </div>
                
                <div className="absolute -inset-6 border border-blue-100 rounded-full animate-ping opacity-20"></div>
            </div>

            <div className="mt-10 text-center">
                <p className="text-sm font-bold tracking-[0.4em] uppercase text-gray-400 animate-pulse">
                    {text}
                </p>
                <div className="mt-2 h-1 w-24 bg-gray-100 mx-auto rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-1/2 animate-[loadingBar_2s_infinite_linear]"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes tilePulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(0.6); opacity: 0.3; background-color: #bfdbfe; }
                }
                @keyframes loadingBar {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
            `}</style>
        </div>
    );
};

export default TileMapLoader;