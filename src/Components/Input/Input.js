import React from 'react'

export default function Input({placeholder,type}) {
    return (
        <div>
            <input type={type} placeholder={placeholder} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-2 outline-none focus:outline-none focus:ring w-full" />
        </div>
    )
}
