import { ref } from 'vue'

export const useConfirm = () => {


    const confirm = ref({
        isOpen: false,
        title: '',
        message: ''
    });

    /**
     * Da valores a el mensaje de confirmacion
     * @param {string} title 
     * @param {string} message 
     */
    const setConfirm = (title, message) => {
        confirm.value.isOpen = true;
        confirm.value.title = title;
        confirm.value.message = message;
    }

    /**
     * Cierra el modal de confirmacion
     */
    const closeConfirm = () => {
        confirm.value.isOpen = false;
    }


    return {
        confirm,
        setConfirm,
        closeConfirm

    }
}