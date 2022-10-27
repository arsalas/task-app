<template>
    <Navbar />
    <section>
        <div class="header-container p-4 mb-2 ">
            <div class="container">
                <h1 class="title has-text-centered">Progreso tareas ({{ completed }}/{{ totalTasks }})</h1>
                <div class="mb-5">
                    <progress class="progress is-primary" :value="completed" :max="totalTasks"></progress>
                </div>
                <h2 class="subtitle has-text-centered" :class="[statusColor]">{{ tagline }}</h2>
                <div class="tabs is-toggle is-toggle-rounded is-centered">
                    <ul>
                        <li :class="{ 'is-active': filter == 0 }" @click="filter = 0">
                            <a>
                                <span class="icon is-small"> <i class="fa-regular fa-circle-check"></i></span>
                                <span>Pendientes</span>
                            </a>
                        </li>
                        <li :class="{ 'is-active': filter == 1 }" @click="filter = 1">
                            <a>
                                <span class="icon is-small"> <i class="fa-solid fa-circle-check"></i></span>
                                <span>Completadas</span>
                            </a>
                        </li>
                        <li :class="{ 'is-active': filter == 2 }" @click="filter = 2">
                            <a>
                                <span class="icon is-small"><i class="fa-regular fa-rectangle-list"></i></span>
                                <span>Todas</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-4-tablet is-3-desktop is-2-landscape" v-for="task in tasks" :key="task.id">
                    <TaskCard :task="task" />
                </div>
            </div>
        </div>
    </section>
    <NewTask />
</template>
<script setup>

import { defineAsyncComponent, onMounted } from 'vue'

import Navbar from '../components/ui/Navbar.vue';
import { useTasks, useAuth } from '../composables';

const TaskCard = defineAsyncComponent(() => import('../components/tasks/TaskCard.vue'));
const NewTask = defineAsyncComponent(() => import('../components/tasks/NewTask.vue'));

const { refreshTasks, completed, totalTasks, tagline, statusColor, tasks, filter } = useTasks();
const { guardRoute } = useAuth()

onMounted(() => {
    guardRoute()
    refreshTasks()
})

</script>
<style scoped>
.header-container {
    position: sticky;
    top: calc(55px);
    z-index: 1;
    background-color: var(--bg-color);
    color: var(--text-color);
}
</style>