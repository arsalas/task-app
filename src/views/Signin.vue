<template>
    <h1 class="title has-text-centered">REGISTRO</h1>
    <form @submit.prevent="submitSingin">
        <div class="field">
            <div class="control has-icons-left">
                <input v-model.trim="formValues.email" class="input" type="email" placeholder="correo" required>
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
            </div>
        </div>
        <div class="field">
            <div class="control has-icons-left has-icons-right">
                <input v-model.trim="formValues.password" class="input"
                    :type="formValues.showPass ? 'text' : 'password'" placeholder="password" required>
                <span class="icon is-small is-left">
                    <i class="fa-solid fa-lock"></i>
                </span>
                <span @click="togglePass" class="icon is-small is-right is-clickable">
                    <i v-if="!formValues.showPass" class="fa-regular fa-eye"></i>
                    <i v-else class="fa-regular fa-eye-slash"></i>
                </span>
            </div>
        </div>
        <div class="control">
            <button type="submit" class="button is-primary is-fullwidth">Enviar</button>
        </div>
    </form>
    <hr>
    <div class="has-text-centered">
        Ya tienes una cuenta, <router-link class="has-text-weight-semibold" :to="{ name: 'login' }">Inicia sesion
        </router-link>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useAuth } from '../composables/auth/useAuth';

const { formValues, togglePass, submitSingin, redirect } = useAuth()

onMounted(() => {
    redirect()
})

</script>
<style scoped>

</style>