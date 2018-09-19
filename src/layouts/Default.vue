<template>
  <div class="layout-wrapper">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/information">Information</router-link>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {};
</script>
