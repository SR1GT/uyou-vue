<template>
  <Suspense>
    <template #default>
      <RouterView />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>

<script setup lang="ts" name="App">
import { Suspense } from "vue";
import Loading from "./components/Loading.vue";
</script>

<style scoped></style>
