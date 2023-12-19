import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Users } from '../pages/Users'
import { UserDetail } from '../pages/UserDetail'
import { UserCreate } from '../pages/UserCreate'
import { CreatedUsers } from '../pages/CreatedUsers'
import { UserEdit } from '../pages/UserEdit'
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/user/:id" element={<UserDetail />} />
                <Route path="/crear-usuario" element={<UserCreate />} />
                <Route path="/user/:id/editar" element={<UserEdit />} />
                <Route path="/usuarios-creados" element={<CreatedUsers />} />
            </Routes>
        </BrowserRouter>
    )
}
