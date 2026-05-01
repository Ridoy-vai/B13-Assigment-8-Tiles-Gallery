import React from 'react';

const FethLoader = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">

            <div className="flex flex-col items-center gap-4">

                {/* Spinner */}
                <div className="relative w-12 h-12">

                    {/* Outer ring */}
                    <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>

                    {/* Animated ring */}
                    <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

                </div>

                {/* Text */}
                <p className="text-gray-500 text-sm animate-pulse">
                    Loading...
                </p>

            </div>

        </div>
    );
};

export default FethLoader;