import axios from 'axios'

export function get(url) {
  return axios.get(url, {
    headers: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNjIyMDUyLCJleHAiOjE2OTM3MDg0NTJ9.PtGaX2grJTX5-nZlZ9ITTjlLVARUGnS8ceJu6Mb5Nd0'
    }
  })
}

export function post(url, product) {
  return axios({
    method: 'post',
    url: `http://localhost:3000/${url}`,
    headers: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNjIyMDUyLCJleHAiOjE2OTM3MDg0NTJ9.PtGaX2grJTX5-nZlZ9ITTjlLVARUGnS8ceJu6Mb5Nd0'
    },
    data: {
      shoppingCart: product
    }
  })
}
