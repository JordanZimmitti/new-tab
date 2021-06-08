import type { NextApiRequest, NextApiResponse } from 'next'
import Axios from 'axios'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')

  const hi = await Axios.get(`http://127.0.0.1:3000/api/google-search/:a`)

  response.send(JSON.stringify(hi.data[1]))
}