let host = '';

if (process.env.NODE_ENV === 'production') {
  host = 'http://localhost';
} else {
  host = '';
}
export default {
  login: host + '/datav/user/login',
  register: host + '/datav/user/register',
  projects: host + '/datav/projects',
};
