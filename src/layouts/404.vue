<template>
    <div class="error">
        <div class="title is-size-1">
            <img src="../assets/images/404.jpg" alt="">
            <div class="my-4">
                Página no encontrada
            </div>
            <router-link :to="{ name: 'tasks' }">Volver al inicio</router-link>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.error {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

img {
    height: 50vh;
    border-radius: 50%;
}
</style>