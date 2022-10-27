<template>
    <div class="notification animate__animated animate__backInRight animate__faster" :class="[type]">
        <button @click="emits('close')" class="delete"></button>
        {{ message }}
    </div>
</template>
<script setup>
const props = defineProps({
    type: String,
    message: String
})
const emits = defineEmits(['close'])

/**
 * Cierra la notificacion automaticamente a los 10 segundos
 */
setTimeout(() => {
    emits('close')
}, 10 * 1000)

</script>
<style scoped>
.notification {
    position: fixed;
    z-index: 1;
    top: 5rem;
    right: 1rem;
    width: 300px;
}
</style>