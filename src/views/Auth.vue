<script setup lang="ts">
import { onMounted, ref } from 'vue';

type Input = {
  name: string
  modelValue: string
  label: string
  type: string
  placeholder: string
  disabled?: boolean
  required?: boolean
}
type Login = {
  email: Input
  password: Input
}
type Signup = {
  confirmPassword: Input
  username: Input
} & Login
type FormGeneric<T = Login | Signup> = {
  form: T
  activeTab: 'login' | 'signup'
}

const resetLogin:Login = {
  email: {
    name: 'email',
    modelValue: '',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
  },
  password: {
    name: 'password',
    modelValue: '',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true,
  }
}
const resetSignup:Signup = {
  email: {
    name: 'email',
    modelValue: '',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
  },
  password: {
    name: 'password',
    modelValue: '',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true,
  },
  confirmPassword: {
    name: 'confirmPassword',
    modelValue: '',
    label: 'Confirm Password',
    type: 'password',
    placeholder: 'Confirm your password',
    required: true,
  },
  username: {
    name: 'username',
    modelValue: '',
    label: 'Username',
    type: 'text',
    placeholder: 'Choose username',
    required: true,
  }
}

const form = ref<FormGeneric>({} as FormGeneric)
onMounted(()=>{
  form.value = {
    form: resetLogin,
    activeTab: 'login'
  }
})
const switchTab = (tab: 'login' | 'signup') => {
  form.value = {
    form: tab === 'login' ? resetLogin : resetSignup,
    activeTab: tab
  }
}

const submitForm = () => {
  console.log(form.value.form)
}
</script>

<template>
  <div
    class="min-h-[100svh] flex flex-col justify-center items-center p-6
    [background-image:_linear-gradient(to_bottom_right,_rgba(0,0,0,.6),_rgba(0,0,0,.2)),url('@/assets/images/Site-background-dark.webp')] [background-size:cover]">
    <div class="grid gap-6 w-[500px] max-w-full">
      <ul class="w-full flex gap-6 justify-center font-black text-amber-900">
        <li
          v-for="tab in ['login', 'signup']"
          @click="switchTab(tab as 'login' | 'signup')"
          :class="{ 'is-active flex-grow !border-white/90 text-white': form.activeTab === tab }"
          class="cursor-pointer p-2 px-4 bg-amber-700 rounded-lg shadow-2xl shadow-black
          transition-all duration-300 border-4 border-black/10 uppercase">
          {{ tab }}
        </li>
      </ul>
      
      <div
        class="bg-white rounded-xl ring-4 ring-amber-800 text-xl shadow-2xl shadow-black
        [background-image:url('@/assets/images/bg-texture.jpg')] [background-size:100px]">
        <form id="form" @submit.prevent="submitForm" class="flex flex-col p-4 md:p-6 gap-y-6 font-black">
          <template v-for="input in form.form" :key="input.name">
            <label class="">
              <span class="block text-white px-1">{{ input.label }}</span>
              <input
                v-model="input.modelValue"
                :name="input.name"
                :type="input.type"
                :placeholder="input.placeholder"
                :disabled="input.disabled"
                :required="input.required"
                class="w-full border-4 border-solid border-black/30 bg-amber-700/90
                rounded-xl p-2 outline-none text-white placeholder:text-amber-800"
              />
            </label>
          </template>
        </form>
      </div>

      <button
        form="form"
        class="bg-amber-700/90 text-white rounded-lg p-2
        font-bold shadow-2xl shadow-black outline-none
        ring-4 ring-amber-800 hover:ring-white/90
        transition-all duration-300 uppercase">
        {{ form.activeTab }}
      </button>
    </div>
  </div>
</template>