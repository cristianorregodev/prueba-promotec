import React from 'react'

export const SelectField = ({ label, name, options, value, readOnly = false, register, error, required = false }) => {
    return (
        <div>
            <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 ">
                {label}
            </label>
            <select
                {...register(name, { required: required })}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                value={value}
            >
                <option value={''}>Seleccione una opcion</option>
                {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                ))}
            </select>
            {error && <p className="text-red-500 text-xs">Este campo es requerido</p>}
        </div>
    )
}
