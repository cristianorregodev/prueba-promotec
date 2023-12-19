import React from 'react'

export const SelectField = ({ label, name, options, value, readOnly = false, register, errors }) => {
    return (
        <div>
            <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 ">
                {label}
            </label>
            <select
                {...register(name)}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                value={value}
            >
                <option selected>Seleccione una opcion</option>
                {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                ))}
            </select>
        </div>
    )
}
