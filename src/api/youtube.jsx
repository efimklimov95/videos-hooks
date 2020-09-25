import axios from 'axios'

const KEY = 'AIzaSyBvKTmZQToqhfoG2zYj0DSswj-ZFQlZF_E'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY
  }
})