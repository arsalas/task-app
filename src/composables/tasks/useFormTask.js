import { ref } from 'vue'

import { newTask, updateTask } from '../../api'
import { useAuthStore, useTaskStore } from '../../store';
import { useNotification, useTasks } from '../';

export const useFormTask = () => {

    const authStore = useAuthStore();
    const taskStore = useTaskStore();
    const { successNotification, failNotification } = useNotification()
    const { refreshTasks } = useTasks()

    const title = ref('');
    const description = ref('');
    const isLoading = ref(false);

    /**
     * Vacia los inputs
     */
    const emptyInputs = () => {
        description.value = '';
        title.value = '';
    }

    /**
     * Comprueba si los inputs estan vacios
     * @returns 
     */
    const isInputsValid = () => !(title.value.length == 0 || description.value.length == 0)

    /**
     * Envia el formulario de crear una task
     * @returns true si se ha creado la task
     */
    const submitCreate = async () => {
        if (!isInputsValid()) return;
        const task = {
            user_id: authStore.id,
            title: title.value,
            description: description.value
        }
        isLoading.value = true;
        const response = await newTask(task)
        isLoading.value = false;
        if (!response) {
            failNotification('No se ha podido crear la tarea')
            return false;
        }
        successNotification('La tarea se ha creado')
        refreshTasks();
        emptyInputs();
        return true
    }

    /**
     * Envia el formulario de edicion de tarea
     * @param {number} id 
     * @returns true si se ha editado la tarea
     */
    const submitEdit = async (id) => {
        if (!isInputsValid()) return false;
        const task = {
            title: title.value,
            description: description.value
        }
        isLoading.value = true;
        const response = await updateTask(id, task)
        isLoading.value = false;
        if (!response) {
            return false;
        }
        taskStore.updateTask(id, task)
        emptyInputs()
        return true;
    }

    return {
        title,
        description,
        submitCreate,
        submitEdit,
        isLoading
    }

}