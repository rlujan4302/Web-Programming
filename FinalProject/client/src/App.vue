<script setup lang="ts">
import { ref, provide } from 'vue';
import { RouterView } from 'vue-router';
import { getSession } from './model/session';
import Navbar from './components/NavBar.vue';

const isLoggedIn = ref(false);
const loggedInUser = ref('');
const session = getSession();

</script>

<template>
  <header>
    <Navbar />
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped></style>