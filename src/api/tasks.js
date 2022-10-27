import { supabase } from "."

const table = 'task'

/**
 * 
 * @param {{user_id: string, title: string, message: string}} task 
 * @returns resultado de la peticion
 */
export const newTask = async (task) => {
    const response = await supabase.from(table)
        .insert(task)
    if (response.error) return false
    return true
}

/**
 * Obtiene la lista de tareas del usuario
 * @returns {Promise<{id:number, user_id: string, title: string, message: string}[]>} array de tasks
 */
export const getTasks = async () => {
    const response = await supabase
        .from(table)
        .select('*')
        .order('id', { ascending: false })
    return response.data
}

/**
 * Actualiza la informacion de una task
 * @param {number} taskId 
 * @param {{title: string, message: string, is_completed: boolean}} task 
 * @returns resultado de la peticion
 */
export const updateTask = async (taskId, task) => {
    const response = await supabase
        .from(table)
        .update(task)
        .eq('id', taskId)
    if (response.error) return false
    return true
}

/**
 * Borra una task de la lista
 * @param {number} taskId 
 * @returns resultado de la peticion
 */
export const deleteTask = async (taskId) => {
    const response = await supabase
        .from(table)
        .delete()
        .eq('id', taskId)
    if (response.error) return false
    return true
}

