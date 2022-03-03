<template>
  <div class="container">
    <h1 class="text-center">Lista de tweets</h1>
    <div class="tweet">
      <p class="tweet__title">User Name: </p>
      <p class="tweet__text">Mensaje</p>
      <span>01/01/2021</span>
    </div>
  </div>
</template>

<script>
  export default {}
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
</style>
