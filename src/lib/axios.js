import axios from 'axios'

export function get(url) {
  return axios.get(url, {
    headers: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzMjA3MDEzLCJleHAiOjE2OTMyOTM0MTN9.X0D6CbET7QtkpspVDuqOFR17STAFPqQ0cxQ8dbEFWzc'
    }
  })
}
