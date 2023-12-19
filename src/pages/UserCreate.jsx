import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { createUser } from '../services/users'
import { InputField } from '../components/InputField'
import { SelectField } from '../components/SelectField'
import Swal from 'sweetalert2'
export const UserCreate = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const createdUser = await createUser(data)
        if (createdUser?.id) {
            Swal.fire({
                title: 'Usuario actualizado correctamente',
                icon: 'success',
            }).then(() => {
                navigate('/usuarios-creados')
            })
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
                        register={register}
                        required={true}
                        error={errors.title}
                    />

                    <InputField
                        label="Nombre"
                        name={'firstName'}
                        register={register}
                        required={true}
                        error={errors.firstName}
                    />
                    <InputField
                        label="Apellido"
                        name={'lastName'}
                        register={register}
                        required={true}
                        error={errors.lastName}
                    />

                    <InputField label="URL de imagen" name={'picture'} register={register} />

                    <SelectField
                        label="Género"
                        name={'gender'}
                        options={['male', 'female', 'other']}
                        register={register}
                        required={true}
                        error={errors.gender}
                    />
                    <InputField
                        label="Correo eléctronico"
                        name={'email'}
                        register={register}
                        type="email"
                        required={true}
                        error={errors.email}
                    />
                    <InputField
                        label="Fecha de nacimiento"
                        name={'dateOfBirth'}
                        register={register}
                        type="date"
                        required={true}
                        error={errors.dateOfBirth}
                    />
                    <InputField label="Teléfono" name={'phone'} register={register} type="tel" />
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
