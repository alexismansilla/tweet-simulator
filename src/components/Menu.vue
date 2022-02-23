<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span>Simulador de tweet</span>
      <button 
        type="button" 
        class="btn pl-4 pr-4 btn-success" 
        :class="{ 'btn-success': !showForm, 'btn-danger': showForm }"
        @click="openCloseForm">{{ !showForm ? "Nuevo Tweet" : "Cerrar Tweet" }}</button>
    </div>
  </nav>
</template>

<script>

export default { 
  props: {
    showForm: Boolean,
    openCloseForm: Function
  }
}
</script>

<style lang="scss">
</style>
