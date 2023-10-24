<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-6">Login</h1>
      <form @submit.prevent="login" class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Usuário</label>
          <input v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Digite seu usuário">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Senha</label>
          <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Digite sua senha">
        </div>
        <div class="flex items-center justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Entrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Lógica para autenticar o usuário
      const login = true;
    if (login) {
      this.$router.push({ name: 'AdminPanel' }); // Redireciona para a página do AdminPanel
    } else {
      // Exibe uma mensagem de erro ou lida com o login inválido
    }
      console.log('Usuário:', this.username);
      console.log('Senha:', this.password);
      // Você pode implementar a lógica de autenticação de acordo com a sua necessidade
    }
  }
};
</script>

<style>
</style>