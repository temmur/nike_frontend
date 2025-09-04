import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', {
    state: ()=> ({
        count: 5,
        name: 'Boburjon'
    }),
    getters: {
        doubleCount: (state)=> state.count * 2,
        message: (state) => `Привет, ${state.name}!`
    },
    actions: {
        increment(){
            this.count++
        },
        setName(newName) {
            this.name = newName
        }
    }
})
