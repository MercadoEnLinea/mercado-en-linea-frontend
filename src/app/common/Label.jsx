import React from 'react'


export default function Label({ value, ...props }) {
    return (
        <label className="block font-medium text-sm text-gray-700" {...props}>
            <span>{value}</span>
        </label>
    )
}