<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">贪吃蛇</a>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              :class="route_name == 'pk_index' ? 'nav-link active' : 'nav-link'"
              aria-current="page"
              href="/pk/"
              >对战</a
            >
          </li>
          <li class="nav-item">
            <a
              :class="
                route_name == 'record_index' ? 'nav-link active' : 'nav-link'
              "
              href="/record/"
              >对局列表</a
            >
          </li>
          <li class="nav-item">
            <a
              :class="
                route_name == 'ranklist_index' ? 'nav-link active' : 'nav-link'
              "
              href="/ranklist/"
              >排行榜</a
            >
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="dropdown-center">
            <a
              class="dropdown-toggle"
              :class="
                route_name == 'user_bot_index' ? 'nav-link active' : 'nav-link'
              "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              千珏
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/user/bot/">我的boot</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">退出</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
let route_name = computed(() => route.name);
</script>

<style scoped></style>
