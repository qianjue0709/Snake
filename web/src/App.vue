<template>
  <navbar></navbar>
  <RouterView></RouterView>
</template>
<script setup>
import navbar from "./components/navbar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
</script>
<style>
body {
  background-image: url("./assets/images/background.jpg");
  background-size: cover;
}
</style>
