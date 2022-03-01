<template>
  <div class="tweet-form" :class="{ open: showForm }">
    <form @submit.prevent="sendTweet">
      <input class="form-control" placeholder="Tu nombre" v-model="username"/>
      <textarea class="form-control" row="3" placeholder="Escribe el tweet" v-model="tweet"></textarea>
      <button type="submit" class="btn btn-primary">Enviar Tweet</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  props: {
    showForm: Boolean
  },
  setup() {
    let username = ref("")
    let tweet = ref("")

    const sendTweet = () => {
      console.log("enviando formulario")
      console.log(username.value)
      console.log(tweet.value)
    };

    return { sendTweet, username, tweet }
  }
}
</script>
<style lang="scss">
  .tweet-form {
    margin-top: 20px;
    height: 0;
    overflow: hidden;

    &.open {
      height: auto;
    }

    form {
      margin-bottom: 50px;

      input {
        margin-bottom: 10px;
      }

      button {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
</style>