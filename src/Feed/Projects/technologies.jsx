import React, { useContext } from "react";
// Remove the unnecessary import statement


export default function Technology({ title }) {

    return (
        <div className="bg-neutral-700 rounded-3xl border-2 border-neutral-300 px-4 py-2   justify-center align-middle transition ease-in-out hover:bg-slate-400 hover:-translate-y-2 duration-300"
        style={{
            width:"fit-content",
            height:"fit-content"
        }}>
            <h5 className="text-white text-sm text-center">
                {title}
            </h5>
        </div>
    );
}
