<template>
    <div class="auth-container">
        <div class="auth-box box">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.auth-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth-box {
    max-width: 350px;
    min-width: 25%;

}
</style>