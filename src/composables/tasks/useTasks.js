
import { computed, ref } from 'vue';
import { getTasks } from '../../api';
import { useTaskStore } from '../../store'


export const useTasks = () => {

    const taskStore = useTaskStore();

    const filter = ref(0);

    /**
     * Filtra las tareas
     */
    const tasks = computed(() => {
        if (filter.value == 0)
            return taskStore.tasks.filter(task => !task.is_completed)
        if (filter.value == 1)
            return taskStore.tasks.filter(task => task.is_completed)
        return taskStore.tasks
    })

    /**
     * Total de tareas completadas
     */
    const completed = computed(() => {
        const completed = taskStore.tasks.filter(task => task.is_completed)
        return completed.length
    })

    /**
     * Total de tareas
     */
    const totalTasks = computed(() => taskStore.tasks.length)

    /**
     * Texto con el progreso de las tareas
     */
    const tagline = computed(() => {
        const percent = completed.value / totalTasks.value;
        if (percent === 1)
            return 'Felicidades!! has completado todas las tareas'

        if (percent > 0.5) return 'Ya queda poco para completar las tareas'
        return 'Todavia quedan tareas que completar'
    })

    /**
     * Color del texto en funcion del progreso de las tareas
     */
    const statusColor = computed(() => {
        const percent = completed.value / totalTasks.value;
        if (percent === 1)
            return 'has-text-success'
        if (percent > 0.5) return 'has-text-primary'
        return ''
    })


    /**
     * Actualiza las tareas en el store
     */
    const refreshTasks = async () => {
        const response = await getTasks()
        taskStore.setTask(response);
    }

    return {
        refreshTasks,
        completed,
        totalTasks,
        tagline,
        statusColor,
        tasks,
        filter
    }

}

