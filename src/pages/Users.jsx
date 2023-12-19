import { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { filteredUsers, getUsers } from '../services/users'
import { Layout } from '../containers/Layout'
import { Link } from 'react-router-dom'
import { PAGINATION_OPTIONS, TABLE_HEADER } from '../containers/helpers'
export const Users = () => {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then((users) => setUsers(users))
    }, [])
    const filter = filteredUsers(users, search)

    return (
        <Layout>
            <div className="flex items-center gap-10">
                <form className="my-10 w-3/4">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">
                        Buscar
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Ingrese el nombre..."
                            required
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </form>
                <Link
                    to="/crear-usuario"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-self-end"
                >
                    Crear usuario
                </Link>
            </div>
            <section className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <DataTable
                    columns={TABLE_HEADER}
                    data={filter}
                    pagination
                    paginationComponentOptions={PAGINATION_OPTIONS}
                    highlightOnHover
                    striped
                    responsive
                />
            </section>
        </Layout>
    )
}
