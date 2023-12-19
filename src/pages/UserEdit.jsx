import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { getUserByID } from '../services/users'

import { Form } from '../containers/Form'
export const UserEdit = () => {
    const [user, setUser] = useState({})
    const { id } = useParams()
    useEffect(() => {
        getUserByID(id).then((user) => setUser(user))
    }, [id])
    return (
        <Layout>
            <section>
                <h1 className="text-2xl text-center my-5">Editar usuario</h1>
                {Object.keys(user).length > 0 ? <Form user={user} /> : null}
            </section>
        </Layout>
    )
}
