import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Layout } from '../containers/Layout'
import { createUser, getUserByID } from '../services/users'
import { InputField } from '../components/InputField'
import { SelectField } from '../components/SelectField'
export const UserCreate = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ defaultValues: user })

    const onSubmit = async (data) => {
        const createdUser = createUser(data)
        if (createdUser) {
            alert('Usuario creado correctamente')
        }
    }

    return (
        <Layout>
            <section>
                <h1 className="text-2xl text-center my-5">Crear usuario</h1>
                <form
                    className="grid md:grid-cols-2 gap-4 rounded-lg shadow-xl p-8 md:max-w-3xl mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <SelectField
                        label="Titulo"
                        name={'title'}
                        options={['ms', 'mr', 'mrs', 'miss']}
                        value={user?.title}
                        register={register}
                    />

                    <InputField label="Nombre" name={'firstName'} value={user?.firstName} register={register} />
                    <InputField label="Apellido" name={'lastName'} value={user?.lastName} register={register} />

                    <InputField label="URL de imagen" name={'picture'} value={user?.picture} register={register} />

                    <SelectField
                        label="Género"
                        name={'gender'}
                        options={['male', 'female', 'other']}
                        register={register}
                    />
                    <InputField
                        label="Correo eléctronico"
                        name={'email'}
                        value={user?.email}
                        register={register}
                        type="email"
                    />
                    <InputField
                        label="Fecha de nacimiento"
                        name={'dateOfBirth'}
                        value={user?.dateOfBirth}
                        register={register}
                        type="date"
                    />
                    <InputField label="Teléfono" name={'phone'} value={user?.phone} register={register} type="tel" />
                    <div className="col-span-2 flex items-center justify-center mt-6">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                            Enviar
                        </button>
                    </div>
                </form>
            </section>
        </Layout>
    )
}
