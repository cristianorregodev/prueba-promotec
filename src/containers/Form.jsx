import React from 'react'
import { useForm } from 'react-hook-form'
import { SelectField } from '../components/SelectField'
import { InputField } from '../components/InputField'
import { editUser } from '../services/users'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export const Form = ({ user }) => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ defaultValues: user })
    const onSubmit = async (data) => {
        const updatedUser = await editUser(data)
        if (updatedUser) {
            Swal.fire({
                title: 'Usuario actualizado correctamente',
                icon: 'success',
            }).then(() => {
                navigate('/')
            })
        }
    }
    return (
        <form
            className="grid md:grid-cols-2 gap-4 rounded-lg shadow-xl p-8 md:max-w-3xl mx-auto"
            onSubmit={handleSubmit(onSubmit)}
        >
            <InputField
                label="ID"
                name={'id'}
                value={user?.firstName}
                register={register}
                readOnly={true}
                error={errors.id}
                required={true}
            />
            <SelectField
                label="Titulo"
                name={'title'}
                options={['ms', 'mr', 'mrs', 'miss']}
                register={register}
                error={errors.title}
                required={true}
            />

            <InputField
                label="Nombre"
                name={'firstName'}
                value={user?.firstName}
                register={register}
                error={errors.firstName}
                required={true}
            />
            <InputField
                label="Apellido"
                name={'lastName'}
                value={user?.lastName}
                register={register}
                error={errors.lastName}
                required={true}
            />

            <InputField label="URL de imagen" name={'picture'} value={user?.picture} register={register} />

            <SelectField
                label="Género"
                name={'gender'}
                options={['male', 'female', 'other']}
                register={register}
                error={errors.gender}
                required={true}
            />
            <InputField
                label="Correo eléctronico"
                name={'email'}
                value={user?.email}
                register={register}
                type="email"
                error={errors.email}
                required={true}
            />
            <InputField
                label="Fecha de nacimiento"
                name={'dateOfBirth'}
                value={user?.dateOfBirth}
                register={register}
                type="date"
                error={errors.dateOfBirth}
                required={true}
            />
            <InputField label="Teléfono" name={'phone'} value={user?.phone} register={register} type="tel" />
            <div className="col-span-2 flex items-center justify-center mt-6">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                    Enviar
                </button>
            </div>
        </form>
    )
}
