<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    if (localStorage.getItem("name")) {
      this.$router.push({ name: "anasayfa" }).catch(() => {});
    } else {
      this.$router.push({ name: "login" }).catch(() => {});
    }
  },
  methods: {},
};
</script>

<style></style>
