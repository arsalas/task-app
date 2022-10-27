import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        isLight: undefined,
    }),
    actions: {
        setTheme() {
            this.loadTheme()
        },
        /**
         * Asigna el valor del theme
         * @returns {undefined}
         */
        loadTheme() {
            if (this.isLight === undefined) return
            if (this.isLight)
                document.documentElement.className = 'light';
            else
                document.documentElement.className = 'dark';
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'theme',
                storage: localStorage,
            },
        ],
    },
})