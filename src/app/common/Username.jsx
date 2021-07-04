import React from 'react'

export default function Username({ domain, name, ...props }) {
    return (
        <div className="max-w-lg flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                {domain}/
            </span>
            <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
            />
        </div>
    )
}