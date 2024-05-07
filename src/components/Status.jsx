import React from "react";

function Status({ status }) {
    return (
        status === 'Alive' ?
        <div className="flex justify-center items-center">
            <span className="bg-green-500 rounded-full h-4 w-4"></span>
            <p className="ml-2 text-lg text-green-400 font-semibold">{status}</p>
        </div> :
        status === 'Dead' ?
            <div className="flex justify-center items-center">
                <span className="bg-red-500 rounded-full h-4 w-4"></span>
                <p className="ml-2 text-lg text-red-400 font-semibold">{status}</p>
            </div> :
            <div className="flex justify-center items-center">
                <span className="bg-gray-500 rounded-full h-4 w-4"></span>
                <p className="ml-2 text-lg text-gray-400 font-semibold">{status}</p>
            </div>
    )
}

export default Status;