<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <router-link :to="{ name: 'home' }">
    <img src="/assets/oakview_logo.png" alt="Oakview" style="width: 70px; height: 70px" />
  </router-link>
</template>
