"use client";
import React, { useState } from 'react';

const MyProfilePage = () => {
    // উদাহরণ ডাটা (বাস্তব ক্ষেত্রে এটি API বা Auth থেকে আসবে)
    const [userData, setUserData] = useState({
        name: "Jhon Doe",
        email: "jhon.doe@example.com",
        password: "securePassword123",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200",
        joinedDate: "October 2023"
    });

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                
                {/* ১. প্রোফাইল কার্ড */}
                <div className="bg-white overflow-hidden border border-gray-100">
                    
                    <div className="px-8 pb-10">
                        {/* ২. প্রোফাইল ইমেজ সেকশন */}
                        <div className="pt-6 mb-6 flex flex-col items-center sm:items-start sm:flex-row sm:gap-6">
                            <div className="w-32 h-32  overflow-hidden bg-gray-200 shadow-lg">
                                <img 
                                    src={userData.image} 
                                    alt="Profile" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mt-20 sm:mt-16 text-center sm:text-left">
                                <h1 className="text-3xl font-extrabold text-gray-900">{userData.name}</h1>
                                <p className="text-blue-600 font-medium">Member since {userData.joinedDate}</p>
                            </div>
                        </div>

                        {/* ৩. ইনফরমেশন লিস্ট */}
                        <div className="space-y-6 mt-10">
                            
                            {/* নাম */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="mb-2 sm:mb-0">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</p>
                                    <p className="text-lg font-semibold text-gray-800">{userData.name}</p>
                                </div>
                                <button className="text-sm text-blue-600 font-bold hover:underline">Edit</button>
                            </div>

                            {/* ইমেল */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="mb-2 sm:mb-0">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</p>
                                    <p className="text-lg font-semibold text-gray-800">{userData.email}</p>
                                </div>
                                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase">Verified</span>
                            </div>

                            {/* পাসওয়ার্ড */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="mb-2 sm:mb-0">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Password</p>
                                    <p className="text-lg font-mono font-semibold text-gray-800">
                                        {showPassword ? userData.password : "••••••••••••"}
                                    </p>
                                </div>
                                <button 
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-sm bg-white border border-gray-200 px-4 py-2 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-all"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* ৪. অ্যাকশন বাটন */}
                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all active:scale-95">
                                Update Profile
                            </button>
                            <button className="flex-1 bg-red-50 text-red-600 py-4 rounded-2xl font-bold hover:bg-red-100 transition-all active:scale-95">
                                Logout Account
                            </button>
                        </div>

                    </div>
                </div>

                <p className="text-center mt-8 text-gray-400 text-sm">
                    Personal data is encrypted and handled according to our Privacy Policy.
                </p>
            </div>
        </div>
    );
};

export default MyProfilePage;