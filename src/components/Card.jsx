import React from "react"

function Card ({id, name, status, species, type, gender, origin, location, image}) {
    return (
        <div className=" bg-zinc-800 p-4 rounded-3xl shadow-md font-sans">
            <div className="flex justify-center flex-col items-center gap-2">
                <img src={image} alt={name} className="w-1/2 object-cover mb-4 mt-2 rounded-full shadow-2xl shadow-black hover:scale-110 transition duration-300 ease-in-out" />
                <h2 className="text-4xl font-extrabold text-orange-300 text-center">{name}</h2>
                <p className="text-lg"><strong className="font-extrabold text-orange-200">Status</strong>: {status}</p>
                <p className="text-lg"><strong className="font-extrabold text-orange-200">Species</strong>: {species}</p>
                <p className="text-lg"><strong className="font-extrabold text-orange-200">Gender</strong>: {gender}</p>
            </div>
        </div>
    )
}

export default Card