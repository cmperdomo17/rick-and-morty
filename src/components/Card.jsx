import React from "react"
import Status from "./Status"
import Gender from "./Gender"

function Card ({id, name, status, species, type, gender, episode, origin, location: {name: locationName}, image}) {
    return (
        <div className=" bg-zinc-800 p-4 rounded-3xl shadow-md">
            <div className="flex justify-center flex-col items-center gap-2">
                <img src={image} alt={name} className="w-1/2 object-cover mb-4 mt-2 rounded-full shadow-2xl shadow-black hover:scale-110 transition duration-300 ease-in-out" />
                <h2 className="text-4xl font-extrabold text-orange-300 text-center">{name}</h2>
                <div className="flex flex-col gap-0 text-center">
                    <div className="flex justify-center gap-2">
                        <Status status={status} /> <p> - </p>
                        <p className="text-lg font-semibold">{species}</p>
                        <Gender gender={gender} />
                    </div>
                    <p className="text-base mt-6"><strong className="font-extrabold text-orange-200">Origin</strong>: {origin.name}</p>
                    <div className="flex flex-col mt-3">
                        <p className="font-extrabold text-orange-200">Last known location:</p>
                        <span className="text-base">{locationName}</span>
                    </div>
                    <p className="text-base mt-3"><strong className="font-extrabold text-orange-200">First seen in</strong>: {episode}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Card