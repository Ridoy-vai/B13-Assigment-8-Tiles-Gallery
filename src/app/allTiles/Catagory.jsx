"use client";

import { useState } from "react";

const Catagory = ({ categories, setCategory }) => {
    const [activeCategory, setActiveCategory] = useState("All Tiles");

    const handleCategory = (cat) => {
        setActiveCategory(cat);
    };

    return (
        <div className="flex gap-4 overflow-x-auto pb-4 container mx-auto">
            {categories.map((cat, index) => (
                <button
                    key={index}
                    onClick={() => handleCategory(cat.slug)}
                    className={`px-6 py-3 rounded-2xl border-2 font-semibold
                    ${
                        activeCategory === cat.slug
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-gray-300"
                    }`}
                >
                    {cat.icon} {cat.name}
                </button>
            ))}
        </div>
    );
};

export default Catagory;