<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm"/>

  <div class="container">
    <tweet-form :showForm="showForm"/>
  </div>

  <div class="container">
    <TweetList />
  </div>
</template>

<script>
import Menu from './components/Menu'
import TweetForm from './components/TweetForm'
import useFormTweet from './hooks/useFormTweet'
import TweetList from './components/TweetList'

export default {
  name: 'App',
  components: {
    Menu,
    TweetForm,
    TweetList
  },
  setup() {
    return {
      ...useFormTweet()
    }
  }
}
</script>

<style lang="scss">
</style>
