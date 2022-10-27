import { useThemeStore } from "../../store";


export const useTheme = () => {

    const themeStore = useThemeStore();

    /**
     * Carga la preferencia de tema
     */
    const loadTheme = () => {
        if (themeStore.isLight === undefined && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            themeStore.isLight = false
        } else
            themeStore.loadTheme()
    }

    return {
        loadTheme
    }
}