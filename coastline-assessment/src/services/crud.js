import axios from 'axios'

const header = {
    headers: {
        'app-id': '6144ab3696ad280a8d68008e'
    }
}

export const getUsers = async () => {
    try {
        const response = await axios.get('https://dummyapi.io/data/v1/user?limit=10', header)
        return response.data
    } catch (err) {
        throw err
    }
}

export const getUser = async (id) => {
    try {
        const response = await axios.get(`https://dummyapi.io/data/v1/user/${id}`, header)
        return response.data
    } catch (err) {
        throw err
    }
}

export const getPosts = async (id) => {
    try {
        const response = await axios.get(`https://dummyapi.io/data/v1/user/${id}/post?limit=10`, header)
        return response.data
    } catch (err) {
        throw err
    }
}

