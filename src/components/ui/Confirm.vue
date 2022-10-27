<template>
    <Modal @close="emits('cancel')">
        <div class="box has-text-centered">
            <div class="title">{{ title }}</div>
            <div class="subtitle mt-2">
                {{ message }}
            </div>
            <div class="buttons mt-6">
                <div @click="emits('confirm')" class="button is-success">Confirmar</div>
                <div @click="emits('cancel')" class="button is-danger">Cancelar</div>
            </div>
        </div>
    </Modal>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';

const Modal = defineAsyncComponent(() => import('../ui/Modal.vue'));

const props = defineProps({
    title: String,
    message: String
})
const emits = defineEmits(['confirm', 'cancel'])
</script>

<style scoped>
.buttons {
    justify-content: center;
}
</style>