import React from "react";

import vector from "../../assets/Under construction-cuate.svg";

const NotFound = () => {
    return (
        <div className="h-[calc(100vh-41.6px)] flex flex-col justify-center items-center py-20">
            <h1 className="text-5xl font-bold text-center uppercase dark:text-red-400 mb-10">
                Page Not Found
            </h1>
            <div className="h-full max-w-full aspect-video">
                <img
                    src={vector}
                    alt="Web illustrations by Storyset"
                    className="h-full mx-auto object-contain"
                />
            </div>
        </div>
    );
};

export default NotFound;
