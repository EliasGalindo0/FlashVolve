<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">Painel Administrativo</h1>

    <!-- Tabela de mensagens recebidas -->
    <div class="-mx-4 mb-4 overflow-x-auto">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold ">Mensagens Recebidas</h2>
        <button @click="handleLogout()" class="bg-green-500 hover:bg-green-600 focus:bg-gray-800 text-white font-bold p-2 ml- rounded focus:outline-none focus:shadow-outline">Logout</button>
      </div>
      <table class="w-full table-auto bg-white rounded-lg shadow-lg my-5">
        <thead class="text-white bg-blue-500">
          <tr>
            <th class="py-3 px-4 uppercase font-bold text-sm">Remetente</th>
            <th class="py-3 px-4 uppercase font-bold text-sm">Mensagem</th>
            <th class="py-3 px-4 uppercase font-bold text-sm">ChatId</th>
            <th class="py-3 px-4 uppercase font-bold text-sm">Ações</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr class="" v-for="message in receivedMessages" :key="message.id">
            <td class="py-3 px-4 w-[20%] text-center">{{ message.username }}</td>
            <td class="py-3 px-4 w-[50%] text-center">{{ message.text }}</td>
            <td class="py-3 px-4 w-[20%] text-center">{{ message.chatId }}</td>
            <td class="py-3 px-4 w-[10%] text-center">
              <button @click="selectChatId(message.chatId)" class="bg-blue-500 hover:bg-blue-600 focus:bg-gray-800 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline">Selecionar Id</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Campo para enviar mensagens -->
    <div class="flex flex-col justify-center items-center mb-6">
    <h2 class="text-xl font-bold mt-4 mb-2">Enviar Mensagem</h2>
        <input type="text" v-model="newMessage" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
        <button @click="sendMessage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import AuthService from '../services/AuthService';

export default {
  data() {
    return {
      receivedMessages: [],
      newMessage: '',
      chatId: '',
      selectedChatId: '',
    };
  },
  methods: {
    selectChatId(chatId) {
      this.selectedChatId = chatId;
    },

    async sendMessage() {
      try {
        if (this.selectedChatId) {
          const response = await axios.post(`http://localhost:3000/telegram-bot/sendMessage/${this.selectedChatId}`, {
            message: this.newMessage
          });
          console.log('Mensagem enviada:', response.data);
          this.newMessage = ''; // Limpa o campo de mensagem após o envio
          }
        } catch (error) {
          console.error('Erro ao enviar a mensagem:', error);
        }
    },

    async fetchMessages() {
      try {
        const response = await axios.get('http://localhost:3000/message');
        console.log("🚀 ~ file: AdminPanel.vue:62 ~ fetchMessages ~ response:", response)
        this.receivedMessages = response.data;
      } catch (error) {
        console.error('Erro ao buscar as mensagens:', error);
      }
    },

    handleLogout() {
      AuthService.logout();
      this.$router.push({ name: 'LoginForm' });
    },
  },
  mounted() {
    this.fetchMessages();
  }
};
</script>

<style>
</style>
