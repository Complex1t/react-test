import axios from 'axios'
const baseUrl = '/api/notes'

const getAll = () => {
    const request = axios.get(baseUrl)

    const nonExistingNote = {
        id: 10000,
        content: 'This note is not saved to server',
        important: true,
    }

    return request.then(response => response.data.concat(nonExistingNote))
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

// the left side is the property name, right side are the functions in this class
// export default is the one thing this file hands to anyone who imports it
export default {
    getAll,
    create,
    update
}

// export default {
//     getAll: getAll,
//     create: create,
//     update: update
// }