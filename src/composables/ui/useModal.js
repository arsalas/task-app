import { ref } from 'vue'


export const useModal = () => {

    const isModalOpen = ref(false);

    /**
     * Cambia la visibilidad del modal
     */
    const toggleModal = () => {
        isModalOpen.value = !isModalOpen.value
    }

    return {
        isModalOpen,
        toggleModal
    }
}