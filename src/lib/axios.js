import axios from 'axios'

export function get(url) {
  return axios.get(url, {
    headers: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzMjkzNjk2LCJleHAiOjE2OTMzODAwOTZ9.g_ldooItKQAdcVUelf61AhLgMteJ3LfxNBvpR965sjQ'
    }
  })
}
