<template>
    <div class="box">
        <h1 class="title has-text-centered">EDITAR TAREA</h1>
        <form @submit.prevent="onSubmit">
            <div class="field">
                <div class="control">
                    <input v-model.trim="title" class="input" type="text" placeholder="Titulo tarea">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <textarea v-model.trim="description" class="textarea" placeholder="Descripcion tarea"></textarea>
                </div>
            </div>
            <div class="control">
                <button type="submit" class="button is-primary is-fullwidth">Guardar</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { useFormTask } from '../../composables';

const props = defineProps({
    id: Number,
    title: String,
    description: String
})

const emits = defineEmits(['success', 'fail'])

const { title, description, submitEdit } = useFormTask()

title.value = props.title;
description.value = props.description;

const onSubmit = async () => {
    const response = await submitEdit(props.id)
    if (response) {
        emits('success')
    } else {
        emits('fail')
    }
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