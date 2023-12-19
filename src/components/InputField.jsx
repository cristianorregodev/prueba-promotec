export const InputField = ({ label, name, value, readOnly = false, type = 'text', register, errors }) => {
    return (
        <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
            {register ? (
                <input
                    {...register(name)}
                    type={type}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                    readOnly={readOnly}
                    placeholder={label}
                />
            ) : (
                <input
                    type={type}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                    readOnly={readOnly}
                    placeholder={label}
                    defaultValue={value}
                />
            )}
        </div>
    )
}
