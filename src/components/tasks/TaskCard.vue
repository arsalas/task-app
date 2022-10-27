<template>
    <div class="card animate__animated animate__zoomIn" :class="{
        'has-background-success-light': task.is_completed,
        'has-background-warning-light': !task.is_completed,
    }">
        <header class="card-header ">
            <p class="card-header-title truncate">
                {{ task.title }}
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                <div>
                    {{ task.description }}
                </div>
                <span class="icon-text mt-4 is-size-6 has-text-grey-light">
                    <span class="icon">
                        <i class="fa-regular fa-clock"></i>
                    </span>
                    <span> {{ date }}</span>
                </span>
            </div>
        </div>
        <footer class="card-footer">
            <span class="card-footer-item">
                <span v-if="task.is_completed" @click="incompletedTask(task.id)" class="icon has-text-success">
                    <i class="fa-solid fa-circle-check"></i>
                </span>
                <span v-else @click="completedTask(task.id)" class="icon has-text-success">
                    <i class="fa-regular fa-circle-check"></i>
                </span>
            </span>
            <span class="card-footer-item">
                <span @click="isModalOpen = true" class="icon has-text-primary">
                    <i class="fa-solid fa-pen-to-square"></i>
                </span>
            </span>
            <span class="card-footer-item">
                <span @click="deleteTaskConfirm" class="icon has-text-danger">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </span>
        </footer>
    </div>

    <Modal v-if="isModalOpen" @close="isModalOpen = false">
        <UpdateTask @success="successEdit" @fail="failEdit" :id="task.id" :title="task.title"
            :description="task.description" />
    </Modal>

    <Notification @close="notification.isOpen = false" v-if="notification.isOpen" :type="notification.type"
        :message="notification.message" />

    <Confirm @confirm="confirmDelete(task.id)" @cancel="cancelDelete" v-if="confirm.isOpen" :title="confirm.title"
        :message="confirm.message" />
</template>
<script setup>

import { computed, defineAsyncComponent } from 'vue';

import { useTaskCard } from '../../composables';
import { formatRelativeTime } from '../../helpers';

const Modal = defineAsyncComponent(() => import('../ui/Modal.vue'));
const Notification = defineAsyncComponent(() => import('../ui/Notification.vue'));
const UpdateTask = defineAsyncComponent(() => import('./UpdateTask.vue'));
const Confirm = defineAsyncComponent(() => import('../ui/Confirm.vue'));

const props = defineProps({ task: Object })

const { cancelDelete, confirm, confirmDelete,
    completedTask, incompletedTask, deleteTaskConfirm,
    failEdit, isModalOpen, notification, successEdit } = useTaskCard();

const date = computed(() => formatRelativeTime(props.task.created_at))


</script>
<style scoped>
.card {
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
}

.card-content {
    padding: 0.5rem 1rem;
    flex: 1;
}

.card-header {
    box-shadow: none;
    /* border-bottom: 1px solid #eee; */
}

.content {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.content div:first-child {
    flex: 1;
}

.icon {
    cursor: pointer;
}

.truncate {
    white-space: nowrap;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>