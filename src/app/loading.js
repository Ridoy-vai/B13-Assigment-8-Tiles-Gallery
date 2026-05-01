"use client";
import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [text, setText] = useState("Loading Collection");
    
    // লোডিং টেক্সট পরিবর্তন করার জন্য একটি ইফেক্ট
    useEffect(() => {
        const phrases = ["Selecting Finest Marble", "Polishing Surfaces", "Arranging Designs", "Almost Ready"];
        let i = 0;
        const interval = setInterval(() => {
            setText(phrases[i]);
            i = (i + 1) % phrases.length;
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
            {/* ১. ইউনিক টাইলস অ্যানিমেশন */}
            <div className="relative w-24 h-24 mb-8">
                {/* ৯টি ছোট বর্গক্ষেত্র (Tiles) যা আলাদা আলাদা সময়ে এনিমেট হবে */}
                <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                        <div 
                            key={i}
                            className="w-7 h-7 bg-blue-600 rounded-sm animate-pulse"
                            style={{
                                animationDelay: `${i * 0.1}s`,
                                opacity: (i + 1) % 2 === 0 ? 0.4 : 1
                            }}
                        ></div>
                    ))}
                </div>
                
                {/* একটি বড় বর্ডার যা ঘুরবে */}
                <div className="absolute -inset-4 border-2 border-dashed border-blue-200 rounded-full animate-[spin_10s_linear_infinite]"></div>
            </div>

            {/* ২. ডাইনামিক টেক্সট */}
            <div className="text-center">
                <h2 className="text-2xl font-light tracking-[0.3em] uppercase text-gray-900 mb-2">
                    {text}
                </h2>
                <div className="flex justify-center gap-1">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></span>
                </div>
            </div>

            {/* ৩. ব্যাকগ্রাউন্ডে হালকা ওয়াটারমার্ক বা প্যাটার্ন */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden flex flex-wrap gap-10 p-10">
                {[...Array(50)].map((_, i) => (
                    <span key={i} className="text-6xl font-bold">TILES</span>
                ))}
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Loading;