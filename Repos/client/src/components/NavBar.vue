<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './loginBadge.vue';

const isActive = ref(false);
const isShoppingCartOpen = ref(false);

</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="28" height="28" />

      </a>
      <a></a>
      <a role="button" class="navbar-burger" :class="{ 'is-active': isActive }" @click="isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <RouterLink class="navbar-item" to="/" >Home</RouterLink>
        <RouterLink class="navbar-item" to="/myactivity">MyActivity</RouterLink>
        <RouterLink class="navbar-item" to="/friendsactivity">FriendsActivity</RouterLink>
        <RouterLink class="navbar-item" to="/about">Search</RouterLink>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Admin
          </a>
          <div class="navbar-dropdown">
            <RouterLink class="navbar-item-damn" to="/">Users</RouterLink>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <LoginBadge />
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>

.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid maroon;
}
</style>