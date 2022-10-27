<template>
    <nav>
        <div class="has-text-weight-bold">
            TASK APP
        </div>
        <div class="end">
            <div class="card__toggle">
                <input v-model="themeStore.isLight" id="themeSwitcher" class="ThemeToggle" type="checkbox" checked>
            </div>
            <span @click="onClick" class="icon  is-clickable">
                <i class="fa-solid fa-right-from-bracket"></i>
            </span>
        </div>
    </nav>
</template>
<script setup>
import { watch } from 'vue';
import { useRouter } from 'vue-router'
import { logOut } from '../../api'
import { useAuthStore, useThemeStore } from '../../store'

const router = useRouter()
const authStore = useAuthStore();
const themeStore = useThemeStore()

watch(() => themeStore.isLight, newValue => {
    themeStore.setTheme()
})

const onClick = async () => {
    const response = await logOut();
    if (response) {
        authStore.logout();
        router.push({ name: 'login' })
    }
}
</script>
<style scoped lang="scss">
nav {
    position: sticky;
    top: 0px;
    display: flex;
    align-items: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1rem;
    height: 55px;
    color: var(--text-color);
    box-shadow: 0 0.125em 0.25em rgb(10 10 10 / 10%);
    z-index: 1;
    background-color: var(--bg-secondary);
}

.end {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card__toggle {
    padding-right: 1rem;
    display: flex;
}

.ThemeToggle {
    appearance: none;
    width: 62px;
    height: 32px;
    display: inline-block;
    position: relative;
    border-radius: 50px;
    overflow: hidden;
    outline: none;
    border: none;
    cursor: pointer;
    background: var(--bg-color); // input de dark mode
    transition: background-color ease 0.3s;

    &::before {
        content: url('https://shivanarrthine.com/public/images/icons/moon.svg');
        display: block;
        position: absolute;
        z-index: 2;
        width: 24px;
        height: 24px;
        background: var(--bg-secondary); // color button en dark mode
        left: 4px;
        top: 4px;
        border-radius: 50%;
        text-indent: 4px;
        line-height: 32px;
        word-spacing: 37px;
        color: #fff;
        white-space: nowrap;
        transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
    }

    &:checked {
        background-color: var(--bg-color);
        border-color: var(--bg-color);

        &::before {
            left: 32px;
            content: url('https://shivanarrthine.com/public/images/icons/sun.svg');
            background: var(--bg-secondary);
        }
    }
}
</style>