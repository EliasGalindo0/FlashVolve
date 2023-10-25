<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-6">Login</h1>
      <form @submit.prevent="login" class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
          <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Digite seu email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Senha</label>
          <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Digite sua senha">
        </div>
        <div class="flex items-center justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Entrar</button>
        </div>
        <p v-if="errorLogin" class="text-red-500 text-sm mt-2 text-center font-bold">{{ errorLogin }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: '',
      password: '',
      errorLogin: '',
    };
  },
  methods: {
    async login() { 
      try {
        const data = {
          email: this.email,
          password: this.password
        };
        const response = await axios.post('http://localhost:3000/login', data);

        if (response.status === 201) {
          const accessToken = response.data.accessToken;
          localStorage.setItem('accessToken', accessToken);
          this.$router.push({ name: 'AdminPanel' });
        } else {
          this.errorLogin = 'Login ou senha incorretos. Por favor verifique e tente novamente.';
        }
      } catch (error) {
        console.error('Erro ao efetuar Login', error);
        this.errorLogin = 'Login ou senha incorretos. Por favor verifique e tente novamente.';
      }
    }
  }
};
</script>

<style>
</style>
