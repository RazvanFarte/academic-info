


export const login_properties = {

  student_login: {
    url: 'http://localhost:8000/api/v1/auth/student/',
    method: 'POST',
    params: {
      username: '',
      password: ''
    },
    response: {
      access_token: '',
      refresh_token: ''
    },
    error: {
      error: '',
      error_description: ''
    }
  },

  teacher_login: {
    url: 'http://localhost:8000/api/v1/auth/teacher/',
    method: 'POST',
    params: {
      username: '',
      password: ''
    },
    response: {
      access_token: '',
      refresh_token: ''
    },
    error: {
      error: '',
      error_description: ''
    }
  }
};
