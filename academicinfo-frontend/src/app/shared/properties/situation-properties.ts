

export const situation_properties = {
  situation_get_all_sorted: {
    url: 'http://localhost:8000/api/v1/situation/',
    method: 'GET',
    response: {
      // array of situations
    },
    headers: {
      access_token: ''
    },
    error: {
      error: '',
      error_description: ''
    }
  },

  situation_get_sorted_by: {
    url: 'http://localhost:8000/api/v1/situation/',
    method: 'GET',
    response: {
      // array of situations
    },
    params: {
      meeting_id: '',
      week_number: ''
    },
    headers: {
      access_token: ''
    },
    error: {
      error: '',
      error_description: ''
    }
  }

};
