import { ref } from "vue"
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../store'
import { logIn, signIn } from "../../api"

export const useAuth = () => {

    const router = useRouter();

    const authStore = useAuthStore();

    const formValues = ref({
        email: '',
        password: '',
        showPass: false,
        haveErrors: false
    })

    /**
     * Cambia la visibilidad del password
     */
    const togglePass = () => {
        formValues.value.showPass = !formValues.value.showPass
    }

    /**
     * Envia el formulario de login
     * @returns {undefined}
     */
    const submitLogin = async () => {
        formValues.value.haveErrors = false;
        const response = await logIn(formValues.value.email, formValues.value.password)
        if (!response) {
            formValues.value.haveErrors = true;
            return
        }
        authStore.login(response);
        router.push({ name: 'tasks' })
    }

    /**
     * Envia el formulario de registro
     */
    const submitSingin = async () => {
        const response = await signIn(formValues.value.email, formValues.value.password)
        if (response) router.push({ name: 'confirm' })

    }

    /**
     * Redirecciona a la vista de tareas
     */
    const redirect = () => {
        if (authStore.isAuth) router.push({ name: 'tasks' })
    }

    /**
     * Protege las rutas que solo pueden entrar los usuarios registrados
     */
    const guardRoute = () => {
        if (!authStore.isAuth) router.push({ name: 'login' })
    }

    return {
        formValues,
        togglePass,
        submitLogin,
        submitSingin,
        redirect,
        guardRoute
    }
}