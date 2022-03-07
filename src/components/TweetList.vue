<template>
  <div class="container">
    <h1 class="text-center">Lista de tweets</h1>
    <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
      <p class="tweet__title">{{ tweet.username }}</p>
      <p class="tweet__text">{{ tweet.tweet }}</p>
      <span>{{ formatDate(tweet.created_at) }}</span>
      <span class="delete-icon" @click="deleteTweet(tweet.id)">X</span>
    </div>
  </div>
</template>

<script>
import moment from "moment"
import "moment/locale/es"
import { deleteTweetApi } from '../api/tweet'

  export default {
    props: {
      tweets: Array,
      reloadTweets: Function
    },
    setup(props) {
      const formatDate = (date) => {
        return moment(date).fromNow()
      }

      const deleteTweet = (id) => {
        deleteTweetApi(id)
        props.reloadTweets()
      }


      return { formatDate, deleteTweet }
    }
  }
</script>

<style lang="scss" scoped>
  .tweet {
    position: relative;
    border: 1px solid red;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    p {
      margin: 0;
    }

    &__title {
      position: absolute;
      top: -12px;
      left: 10px;
      background-color: #fff;
      padding: 0 10px;
    }

    &__text {
      position: absolute;
      right: 10px;
    }
  }
  .delete-icon {
    cursor: pointer;
  }
</style>
