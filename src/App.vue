<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm"/>

  <div class="container">
    <tweet-form :showForm="showForm"/>
  </div>
</template>

<script>
import Menu from './components/Menu'
import TweetForm from './components/TweetForm'
import useFormTweet from './hooks/useFormTweet'

export default {
  name: 'App',
  components: {
    Menu,
    TweetForm
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
