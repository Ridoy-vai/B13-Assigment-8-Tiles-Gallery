"use client";
import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const MyProfilePage = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user


    const handelSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Log out Success ✅");
                    window.location.href = "/";
                },
                onError: () => {
                    toast.error("Log out Failed ❌");
                }
            }
        });
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">

                <div className="bg-white overflow-hidden border border-gray-100">

                    <div className="px-8 pb-10">
                        <div className="pt-6 mb-6 flex flex-col items-center sm:items-start sm:flex-row sm:gap-6">
                            <div className="w-32 h-32  overflow-hidden bg-gray-200 shadow-lg">
                                <img
                                    src={user?.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                    alt="Image Link Not Valid"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mt-20 sm:mt-16 text-center sm:text-left">
                                <h1 className="text-3xl font-extrabold text-gray-900">{user?.name}</h1>
                                <p className="text-blue-600 font-medium">ID: {user?.id}</p>
                            </div>
                        </div>

                        <div className="space-y-6 mt-10">

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="mb-2 sm:mb-0">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</p>
                                    <p className="text-lg font-semibold text-gray-800">{user?.name}</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="mb-2 sm:mb-0">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</p>
                                    <p className="text-lg font-semibold text-gray-800">{user?.email}</p>
                                </div>
                                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase">Not Verified</span>
                            </div>


                            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all active:scale-95">
                                    Update Profile
                                </button>
                                <button onClick={handelSignOut} className="flex-1 bg-red-50 text-red-600 py-4 rounded-2xl font-bold hover:bg-red-100 transition-all active:scale-95">
                                    Logout Account
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;