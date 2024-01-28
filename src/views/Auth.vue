<script setup lang="ts">
import { onMounted, ref } from 'vue';

type Input = {
  name: string
  modelValue: string
  label: string
  type: string
  placeholder: string
  disabled?: boolean
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
  },
  password: {
    name: 'password',
    modelValue: '',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  }
}
const resetSignup:Signup = {
  email: {
    name: 'email',
    modelValue: '',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  password: {
    name: 'password',
    modelValue: '',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
  confirmPassword: {
    name: 'confirmPassword',
    modelValue: '',
    label: 'Confirm Password',
    type: 'password',
    placeholder: 'Confirm your password',
  },
  username: {
    name: 'username',
    modelValue: '',
    label: 'Username',
    type: 'text',
    placeholder: 'Choose username',
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
</script>

<template>
  <div
    class="min-h-[100svh] flex flex-col justify-center items-center px-6
    [background-image:_linear-gradient(to_bottom_right,_rgba(0,0,0,.6),_rgba(0,0,0,.2)),url('@/assets/images/Site-background-dark.webp')] [background-size:cover]">
    <div
      class="bg-white w-[500px] max-w-full rounded-xl ring-4 ring-amber-800 text-xl
      [background-image:url('@/assets/images/bg-texture.jpg')] [background-size:100px]">
      <ul class="w-full flex gap-6 px-4 md:px-6 justify-center mt-6 font-black text-amber-900">
        <li
          v-for="tab in ['login', 'signup']"
          @click="switchTab(tab as 'login' | 'signup')"
          :class="{ 'is-active flex-grow !border-white/90 text-white': form.activeTab === tab }"
          class="cursor-pointer p-2 px-4 bg-amber-700 rounded-lg
          transition-all duration-300 border-4 border-transparent uppercase">
          {{ tab }}
        </li>
      </ul>

      <form class="flex flex-col p-4 md:p-6 gap-y-6 font-black">
        <template v-for="input in form.form" :key="input.name">
          <label class="">
            <span class="block text-white px-1">{{ input.label }}</span>
            <input
              :name="input.name"
              :type="input.type"
              :placeholder="input.placeholder"
              v-model="input.modelValue"
              class="w-full border-4 border-solid border-black/30 bg-amber-700/90
              rounded-xl p-2 outline-none text-white placeholder:text-amber-800"
            />
          </label>
        </template>
      </form>
    </div>
  </div>
</template>