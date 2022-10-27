import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        // Nos indicara si el usuario esta autenticado
        isAuth: false,
        // Guardaremos el id de supabase que nos dara al hacer el login
        id: undefined
    }),
    actions: {
        /**
         * Inicia la sesion del usuario
         * @param {string} id 
         */
        login(id) {
            this.isAuth = true
            this.id = id;
        },

        /**
         * Cierra la sesion del usuario
         */
        logout() {
            this.id = undefined
            this.isAuth = false;
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'auth',
                storage: localStorage,
            },
        ],
    },
})