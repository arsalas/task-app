import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        // Guardaremos los task que nos de supabase
        tasks: []
    }),
    actions: {

        /**
         * Asigna el valor de las tasks al store
         * @param {object[]} tasks 
         */
        setTask(tasks) {
            this.tasks = tasks
        },

        /**
         * Marca una task como completada
         * @param {number} id 
         */
        completeTask(id) {
            const task = this.tasks.find(task => task.id == id)
            task.is_completed = true;
        },

        /**
         * Marca una task como pendiente
         * @param {number} id 
         */
        incompleteTask(id) {
            const task = this.tasks.find(task => task.id == id)
            task.is_completed = false;
        },

        /**
         * Actualiza el valor de una task por id
         * @param {number} id 
         * @param {object} payload 
         */
        updateTask(id, payload) {
            const i = this.tasks.findIndex(task => task.id == id)
            this.tasks[i] = {
                ...this.tasks[i],
                ...payload
            }
        },

        /**
         * Borra una task por id
         * @param {number} id 
         */
        deleteTask(id) {
            const i = this.tasks.findIndex(task => task.id == id)
            this.tasks.splice(i, 1);
        }
    }
})