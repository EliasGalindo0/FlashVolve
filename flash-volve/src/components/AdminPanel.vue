<template>
  <div class="container mx-auto p-4">
  <h1 class="text-3xl font-bold mb-4 text-center">Painel Administrativo</h1>

  <!-- Tabela de mensagens recebidas -->
  <h2 class="text-xl font-bold mb-2">Mensagens Recebidas</h2>
  <div class="-mx-4 mb-4 overflow-x-auto">
    <table class="w-full whitespace-no-wrap bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
      <thead class="text-white bg-blue-500">
        <tr class="flex justify-between">
          <th class="py-3 px-4 uppercase font-bold text-sm">Remetente</th>
          <th class="py-3 px-4 uppercase font-bold text-sm">Mensagem</th>
          <th class="py-3 px-4 uppercase font-bold text-sm">Data</th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <tr v-for="message in receivedMessages" :key="message.id">
          <td class="py-3 px-4">{{ message.sender }}</td>
          <td class="py-3 px-4">{{ message.content }}</td>
          <td class="py-3 px-4">{{ message.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Campo para enviar mensagens -->
  <h2 class="text-xl font-bold mt-4 mb-2">Enviar Mensagem</h2>
    <div class="flex flex-wrap mb-6">
      <div class="w-full md:w-full px-3 mb-6 md:mb-0">
        <input type="text" v-model="newMessage" class="bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base py-2 px-4 block w-full appearance-none leading-normal" placeholder="Digite sua mensagem">
        <button @click="sendMessage" class="bg-blue-500 hover:bg-blue-700 mt-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      receivedMessages: [], // Array para armazenar as mensagens recebidas
      newMessage: '' // Variável para armazenar a nova mensagem a ser enviada
    };
  },
  methods: {
    async sendMessage(chatId) {
      try {
        const response = await axios.post(`http://localhost:3000/telegram-bot/sendMessage/${chatId}`, {
          message: this.newMessage
        });
        console.log('Mensagem enviada:', response.data);
        this.newMessage = ''; // Limpa o campo de mensagem após o envio
      } catch (error) {
        console.error('Erro ao enviar a mensagem:', error);
      }
    }, 
    async fetchMessages() {
      try {
        const response = await axios.get('http://localhost:3000/telegram-bot/messages');
        this.receivedMessages = response.data;
      } catch (error) {
        console.error('Erro ao buscar as mensagens:', error);
      }
    }
  },
  mounted() {
    this.fetchMessages();
  }
};
</script>

<style>
</style>
