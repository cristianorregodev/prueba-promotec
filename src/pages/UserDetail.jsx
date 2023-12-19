import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { getUserByID } from '../services/users'
import { InputField } from '../components/InputField'
export const UserDetail = () => {
    const [user, setUser] = useState({})
    const { id } = useParams()
    useEffect(() => {
        getUserByID(id).then((user) => setUser(user))
    }, [id])
    return (
        <Layout>
            <section>
                <h1 className="text-2xl text-center my-5">Detalles de usuario</h1>
                <form className="grid grid-cols-2 gap-4 rounded-lg shadow-xl p-8">
                    <InputField label="ID" value={user?.id} readOnly={true} />
                    <InputField label="Titulo" value={user?.title} readOnly={true} />
                    <InputField label="Nombre" value={user?.firstName} readOnly={true} />
                    <InputField label="Apellido" value={user?.lastName} readOnly={true} />

                    <InputField label="Imagen" value={user?.picture} readOnly={true} />
                    <InputField label="Género" value={user?.gender} readOnly={true} />
                    <InputField label="Correo eléctronico" value={user?.email} readOnly={true} />
                    <InputField label="Fecha de nacimiento" value={user?.dateOfBirth} readOnly={true} />
                    <InputField label="Teléfono" value={user?.phone} readOnly={true} />
                </form>
            </section>
        </Layout>
    )
}
