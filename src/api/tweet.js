import { v4 as uuidv4 } from "uuid";
import { TWEET } from "../utils/constant"
import { size, remove } from "lodash"

export function saveTweetApi(tweet, username) {
  const tweets = getTweetApi()

  if(size(tweets) === 0) {
    const tweetTemp = [
      {
        id: uuidv4(),
        tweet: tweet,
        username: username,
        created_at: new Date()
      }
    ]

    localStorage.setItem(TWEET, JSON.stringify(tweetTemp))
  } else {
    tweets.push({
      id: uuidv4(),
      tweet,
      username,
      created_at: new Date()
    })

    localStorage.setItem(TWEET, JSON.stringify(tweets))
  }
}

export function getTweetApi() {
  const tweets = localStorage.getItem(TWEET)

  if(tweets) {
    return JSON.parse(tweets)
  }

  return []
}

export function deleteTweetApi(id) {
  const tweets = getTweetApi()
  remove(tweets, function(tweet) {
    return tweet.id === id
  })

  localStorage.setItem(TWEET, JSON.stringify(tweets))
}