<template>
    <h1 class="title has-text-centered">INICIAR SESION</h1>
    <form @submit.prevent="submitLogin">
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
    <article v-if="formValues.haveErrors" class="message is-danger mt-3">
        <div class="message-body">
            Correo o password incorrectos
        </div>
    </article>
    <hr>
    <div class="has-text-centered">
        No tienes una cuenta, <router-link class="has-text-weight-semibold" :to="{ name: 'signin' }"> Registrate
        </router-link>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useAuth } from '../composables/auth/useAuth';

const { formValues, togglePass, submitLogin, redirect } = useAuth()

onMounted(() => {
    redirect()
})

</script>
<style scoped>

</style>