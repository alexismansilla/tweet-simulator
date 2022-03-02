import { v4 as uuidv4 } from "uuid";
import { TWEET } from '../utils/constant'

export function saveTweetApi(tweet, username) {
  const tweetTemp = {
    id: uuidv4(),
    tweet: tweet,
    username: username,
    created_at: new Date()
  }

  localStorage.setItem(TWEET, JSON.stringify(tweetTemp))
}
