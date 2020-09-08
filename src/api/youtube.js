import axios from 'axios'

const KEY = 'AIzaSyBD67yVACDJ8-wXOtpPsK5Kpui-YmZ_Ztw'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY
  }
})