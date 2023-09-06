<template>
  <div class="main_header">
    <div class="main_header-logo text-teal-lighten-2">
      VUE-AUCTION
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main_header {
  position: sticky;
  top: 0;
  background: #fff;
  padding: 10px 20px;
  box-shadow: 0px 2px 5px var(--color-border);
}
.main_header-logo {
  color: var(--color-primary);
  font-size: 20px;
  font-weight: bold;
  transition: all .2s;
}
</style>