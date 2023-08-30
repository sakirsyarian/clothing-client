import axios from 'axios'

export function get(url) {
  return axios.get(url, {
    headers: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzMzY5NzEwLCJleHAiOjE2OTM0NTYxMTB9.8KpgbqOTRlO-tCAYOzekYlLRbuElgigndorbVXqQq1c'
    }
  })
}

export function post(url, product) {
  return axios({
    method: 'post',
    url: `http://localhost:3000/${url}`,
    headers: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzMzY5NzEwLCJleHAiOjE2OTM0NTYxMTB9.8KpgbqOTRlO-tCAYOzekYlLRbuElgigndorbVXqQq1c'
    },
    data: {
      shoppingCart: product
    }
  })
}
