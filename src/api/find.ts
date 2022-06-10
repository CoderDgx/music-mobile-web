/* eslint-disable import/prefer-default-export */
import axios from './base'

export async function getBanner() {
  const res = await axios.get('/banner?type=2')
  return res.data.banners
}
