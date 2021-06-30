

let host = ''

if (process.env.NODE_ENV === 'production') {
    host = 'http://localhost'
} else {
    host = 'https://localhost:3000/datav'
}
export default {
    login: host + '/login',
    register: host + '/register',
    projects: host + '/projects'
}