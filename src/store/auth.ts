import type { register } from 'module'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        modalShow: true,
        currentStep: 'login',
        registerStatus: false,
        registerStep: 'reg'
    })
})
