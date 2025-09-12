<template>
 <div>
   <p>This is login Page</p>
   <p>Input number</p>
   <p>Input parol </p>
 </div>
</template>
<script setup lang="ts">
import {computed, reactive, ref, defineEmits} from "vue";
import {} from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import {useAuthStore} from "@/store/auth";
const inputVal = ref('')
const showPassword = ref(false)

const checkInput=()=> {
  showPassword.value = !showPassword.value
}
const inputType=computed(()=> (showPassword.value ? 'text' : 'password'))

const formData = reactive({
  phone: '',
  password: ''
})
const rules = computed(()=>{
  return {
    password: {required},
    phone: {required},
  }
})

const submitForm= async ()=> {
  v$.value.$touch()
  if(v$.value.$invalid) return
  emit('on-change', 'otp')
}
const v$ = useVuelidate(rules, formData)
</script>
