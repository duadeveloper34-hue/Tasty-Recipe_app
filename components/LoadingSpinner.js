import React from 'react';


export default function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center min-h-100">
            <div className="relative">
                <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl">🍳</span>
                </div>
            </div>
        </div>
    );
}