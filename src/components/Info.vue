<template>
  <div class="info-box">
    <h2>{{ info }}</h2>
  </div>
</template>

<script>
export default {
  name: "Word",
  data() {
    return {
      info: this.$route.params.id
    };
  }
};
</script>
