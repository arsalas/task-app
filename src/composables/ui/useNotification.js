import { ref } from 'vue'

export const useNotification = () => {


    const notification = ref({
        isOpen: false,
        type: '',
        message: ''
    });

    /**
     * Asigna valores a la notificacion
     * @param {{isOpen:boolean, type:string, message:string}} params 
     */
    const setNotification = ({ isOpen, type, message }) => {
        notification.value.isOpen = isOpen;
        notification.value.type = type;
        notification.value.message = message;
    }

    /**
     * Activa la notificacion de exito
     * @param {string} message 
     */
    const successNotification = (message) => {
        setNotification({
            isOpen: true,
            type: 'is-success',
            message
        })
    }

    /**
     * Activa la notificacion de fallo
     * @param {string} message 
     */
    const failNotification = (message) => {
        setNotification({
            isOpen: true,
            type: 'is-danger',
            message
        })
    }

    return {
        notification,
        successNotification,
        failNotification
    }
}