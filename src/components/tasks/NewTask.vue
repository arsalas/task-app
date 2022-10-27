<template>
    <Modal v-if="isModalOpen" @close="toggleModal">
        <div class="box">
            <h1 class="title has-text-centered">NUEVA TAREA</h1>
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <div class="control">
                        <input v-model.trim="title" class="input" type="text" placeholder="Titulo tarea">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <textarea v-model.trim="description" class="textarea"
                            placeholder="Descripcion tarea"></textarea>
                    </div>
                </div>
                <div class="control">
                    <button type="submit" class="button is-primary is-fullwidth">Guardar</button>
                </div>
            </form>
        </div>
    </Modal>
    <button @click="toggleModal" class="button is-danger floating-button" :class="{'is-loading': isLoading}">
        <i class="fa-solid fa-plus"></i>
    </button>
    <Notification @close="notification.isOpen = false" v-if="notification.isOpen" :type="notification.type"
        :message="notification.message" />
</template>
<script setup>

import { defineAsyncComponent } from 'vue';
import { useModal, useFormTask, useNotification } from '../../composables';

const Modal = defineAsyncComponent(() => import('../ui/Modal.vue'));
const Notification = defineAsyncComponent(() => import('../ui/Notification.vue'));

const { isModalOpen, toggleModal } = useModal()
const { notification, } = useNotification()
const { description, title, submitCreate, isLoading } = useFormTask()

const onSubmit = async () => {
    const response = await submitCreate();
    if (response) toggleModal();
}

</script>
<style scoped>
.floating-button {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    padding: 0px;
    color: #fff;
}
</style>