import axios from 'axios'

export function get(url) {
  return axios.get(url, {
    headers: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNDU2NzAzLCJleHAiOjE2OTM1NDMxMDN9.n_Muc16y9JrOPTrwKtkhXQlp_ipw_cDrVjIIL6lHnmM'
    }
  })
}

export function post(url, product) {
  return axios({
    method: 'post',
    url: `http://localhost:3000/${url}`,
    headers: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNDU2NzAzLCJleHAiOjE2OTM1NDMxMDN9.n_Muc16y9JrOPTrwKtkhXQlp_ipw_cDrVjIIL6lHnmM'
    },
    data: {
      shoppingCart: product
    }
  })
}
