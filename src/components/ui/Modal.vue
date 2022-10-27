<template>
    <div class="modal is-active">
        <div class="modal-background" @click="emits('close')"></div>
        <div class="modal-content animate__animated animate__zoomIn animate__faster">
            <slot></slot>
        </div>
        <button @click="emits('close')" class="modal-close is-large" aria-label="close"></button>
    </div>
</template>
<script setup>
const emits = defineEmits(['close'])

</script>
<style scoped>

</style>