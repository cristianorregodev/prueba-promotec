const { VITE_API_URL, VITE_APP_ID } = import.meta.env

export const filteredUsers = (data, term) => {
    const filtered = data.filter(
        (user) =>
            user.firstName.toLowerCase().includes(term.toLowerCase()) ||
            user.lastName.toLowerCase().includes(term.toLowerCase())
    )
    return filtered
}
export const getUsers = async () => {
    try {
        const response = await fetch(`${VITE_API_URL}/user?limit=50`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'app-id': VITE_APP_ID,
            },
        })
        const success = await response.json()
        const users = success.data
        return users
    } catch (error) {
        console.log(error)
    }
}

export const getUserByID = async (id) => {
    try {
        const response = await fetch(`${VITE_API_URL}/user/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'app-id': VITE_APP_ID,
            },
        })
        const success = await response.json()
        const users = success
        return users
    } catch (error) {
        console.log(error)
    }
}

export const createUser = async (user) => {
    try {
        const response = await fetch(`${VITE_API_URL}/user/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'app-id': VITE_APP_ID,
            },
            body: JSON.stringify(user),
        })
        const success = await response.json()
        const users = success
        return users
    } catch (error) {
        console.log(error)
    }
}

export const getUsersCreated = async () => {
    try {
        const response = await fetch(`${VITE_API_URL}/user?created=1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'app-id': VITE_APP_ID,
            },
        })
        const success = await response.json()
        const users = success.data
        return users
    } catch (error) {
        console.log(error)
    }
}

export const editUser = async (user) => {
    try {
        const response = await fetch(`${VITE_API_URL}/user/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'app-id': VITE_APP_ID,
            },
            body: JSON.stringify(user),
        })
        const success = await response.json()
        const users = success
        return users
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (id) => {
    try {
        const response = await fetch(`${VITE_API_URL}/user/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'app-id': VITE_APP_ID,
            },
        })
        const success = await response.json()
        const users = success
        return users
    } catch (error) {
        console.log(error)
    }
}
