import type { register } from 'module'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        modalShow: false,
        currentStep: 'login',
        registerStatus: false,
        registerStep: 'reg'
    })
})
