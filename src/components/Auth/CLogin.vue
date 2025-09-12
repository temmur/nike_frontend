<!--<template>-->
<!-- <div>-->
<!--   <p>This is login Page</p>-->
<!--   <p>Input number</p>-->
<!--   <p>Input parol </p>-->
<!-- </div>-->
<!--</template>-->
<!--<script setup lang="ts">-->
<!--import {computed, reactive, ref, defineEmits} from "vue";-->
<!--import {} from '@vuelidate/core'-->
<!--import { required } from '@vuelidate/validators'-->
<!--import {useAuthStore} from "@/store/auth";-->
<!--const inputVal = ref('')-->
<!--const showPassword = ref(false)-->

<!--const checkInput=()=> {-->
<!--  showPassword.value = !showPassword.value-->
<!--}-->
<!--const inputType=computed(()=> (showPassword.value ? 'text' : 'password'))-->

<!--const formData = reactive({-->
<!--  phone: '',-->
<!--  password: ''-->
<!--})-->
<!--const rules = computed(()=>{-->
<!--  return {-->
<!--    password: {required},-->
<!--    phone: {required},-->
<!--  }-->
<!--})-->

<!--const submitForm= async ()=> {-->
<!--  v$.value.$touch()-->
<!--  if(v$.value.$invalid) return-->
<!--  emit('on-change', 'otp')-->
<!--}-->
<!--const v$ = useVuelidate(rules, formData)-->
<!--</script>-->


<template>
  <div class="max-w-sm mx-auto p-4 space-y-4"
  >
    <h1 class="text-xl font-bold">Login Page</h1>

    <div>
      <label for="phone" class="block text-sm font-medium">Phone Number</label>
      <input
          id="phone"
          v-model="formData.phone"
          type="tel"
          placeholder="+998 90 123 45 67"
          class="border rounded w-full px-3 py-2"
      />
      <p v-if="v$.phone.$error" class="text-red-500 text-sm mt-1">
        Phone is required
      </p>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium">Password</label>
      <div class="relative">
        <input
            id="password"
            v-model="formData.password"
            :type="inputType"
            placeholder="******"
            class="border rounded w-full px-3 py-2 pr-12"
        />
        <button
            type="button"
            @click="togglePassword"
            class="absolute right-2 top-1/2 -translate-y-1/2 text-sm underline"
        >
          {{ showPassword ? 'Hide' : 'Show' }}
        </button>
      </div>
      <p v-if="v$.password.$error" class="text-red-500 text-sm mt-1">
        Password is required
      </p>
    </div>
    <button
        type="button"
        class="bg-blue-600 hover:bg-blue-700 text-white rounded w-full py-2 transition"
        :disabled="loading"
        @click="submitForm"
    >
      {{ loading ? 'Loading…' : 'Login' }}
    </button>
    <button  class="bg-red-600 hover:bg-red-700 text-white rounded w-full py-2 transition"
             @click="$emit('on-change', 'register')"
    >
      {{ loading ? 'Loading…' : 'Registration' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, defineEmits } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import { useAuthStore } from '@/store/auth'
import COtp from "@/components/Auth/COtp.vue";
interface LoginForm {
  phone: string
  password: string
}
const emit = defineEmits<{
  (e: 'on-change', step: 'otp'): void
}>()

const steps = {
  opt: 'otp'
}
const currentStep = ref('login')
const authStore = useAuthStore()
const formData = reactive<LoginForm>({ phone: '', password: '' })
const showPassword = ref(false)
const loading = ref(false)

const rules = computed(() => ({
  phone: { required },
  password: { required, minLength: minLength(6) }
}))
const v$ = useVuelidate(rules, formData)


const inputType = computed(() => (showPassword.value ? 'text' : 'password'))


function togglePassword() {
  showPassword.value = !showPassword.value
}


const submitForm= async ()=> {
  v$.value.$touch()
  if(v$.value.$invalid) return
 emit('on-change', 'otp')
 //  currentStep.value = 'otp'
}
</script>
