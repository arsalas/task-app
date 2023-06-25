<template>
    <router-view></router-view>
</template>
<script setup>
import { onMounted, ref } from 'vue';

import { logOut } from './api'
import { useAuthStore } from './store'
import { useTheme } from './composables';

const authStore = useAuthStore();
const { loadTheme } = useTheme()

onMounted(async () => {
    loadTheme();
    if (!authStore.isAuth) {
        logOut();
    }
})

</script>

<style scoped>

</style>