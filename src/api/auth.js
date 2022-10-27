import { supabase } from "."

/**
 * Registra un usuario en supabase
 * @param {string} email 
 * @param {string} password 
 * @returns resultado de la peticion
 */
export const signIn = async (email, password) => {
    const response = await supabase.auth.signUp({
        email,
        password
    })
    if (response.error) return false
    return true
}

/**
 * Comprueba si las credenciales del usuario son validas
 * @param {string} email 
 * @param {string} password 
 * @returns id del usuario
 */
export const logIn = async (email, password) => {
    const response = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if (response.error) return false
    return response.data.user.id
}

/**
 * Cierra la sesion del usuario
 * @returns resultado de la peticion
 */
export const logOut = async () => {
    const response = await supabase.auth.signOut()
    if (response.error) return false
    return true
}