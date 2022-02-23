<template>
  <div class="tweet-form" :class="{ open: showForm }">
    <form>
      <input class="form-control" placeholder="Tu nombre"/>
      <textarea class="form-control" row="3" placeholder="Escribe el tweet"></textarea>
      <button type="submit" class="btn btn-primary">Enviar Tweet</button>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    showForm: Boolean
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