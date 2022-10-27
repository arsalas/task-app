import JSConfetti from 'js-confetti'
import { useNotification, useModal, useConfirm, useTasks } from '../';
import { deleteTask, updateTask } from '../../api';
import { useTaskStore } from '../../store';

export const useTaskCard = () => {
    const jsConfetti = new JSConfetti();

    const { isModalOpen, toggleModal } = useModal();
    const { closeConfirm, confirm, setConfirm } = useConfirm()
    const { notification, failNotification, successNotification } = useNotification()
    const { completed, totalTasks } = useTasks()
    const taskStore = useTaskStore()

    /**
     * Muestra el mensaje de confirmacion de eliminacion de la tarea
     */
    const deleteTaskConfirm = () => {
        setConfirm('Borrar tarea', 'Estas seguro que quieres eliminar la tarea?')
    }

    /**
     * Cancela la eliminacion de la tarea
     */
    const cancelDelete = () => {
        closeConfirm()
    }

    /**
     * Confirma la eliminacion de la tarea
     * @param {number} id 
     */
    const confirmDelete = (id) => {
        closeConfirm();
        removeTask(id)
    }

    /**
     * Notificacion que indica que se ha editado la tarea
     */
    const successEdit = () => {
        toggleModal()
        successNotification('Task modificada')
    }

    /**
     * Notificacion que indica que no se ha podido guardar la tarea
     */
    const failEdit = () => {
        toggleModal()
        failNotification('No se ha podido guardar la tarea')
    }

    /**
     * Marca la tarea como completada
     * Si se han completado todas las tareas activa la libreria de confeti
     * @param {number} id 
     * @returns 
     */
    const completedTask = async (id) => {
        const response = await updateTask(id, { 'is_completed': true })
        if (!response) return false
        taskStore.completeTask(id)
        if (completed.value === totalTasks.value) {
            jsConfetti.addConfetti()
        }
    }

    /**
     * Marca la tarea como no completada
     * @param {number} id 
     */
    const incompletedTask = async (id) => {
        const response = await updateTask(id, { 'is_completed': false })
        if (response) taskStore.incompleteTask(id)
    }

    /**
     * Borra la tarea
     * @param {number} id 
     */
    const removeTask = async (id) => {
        const response = await deleteTask(id)
        if (response) taskStore.deleteTask(id)
    }

    return {
        isModalOpen,
        notification,
        confirm,
        deleteTaskConfirm,
        cancelDelete,
        confirmDelete,
        successEdit,
        failEdit,
        completedTask,
        incompletedTask,
        removeTask,
    }
}