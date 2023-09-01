import axios from 'axios'

export function get(url) {
  return axios.get(url, {
    headers: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNTQ3NTgyLCJleHAiOjE2OTM2MzM5ODJ9.6IFXRIV6ucJuB4gfus-VTjd7Ah6pGz6lhry-OPJMCBU'
    }
  })
}

export function post(url, product) {
  return axios({
    method: 'post',
    url: `http://localhost:3000/${url}`,
    headers: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNTQ3NTgyLCJleHAiOjE2OTM2MzM5ODJ9.6IFXRIV6ucJuB4gfus-VTjd7Ah6pGz6lhry-OPJMCBU'
    },
    data: {
      shoppingCart: product
    }
  })
}
