import { Controller, Get } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async getMessages(): Promise<any[]> {
    try {
      const messages = await this.messageService.findAll();
      return messages.map((message) => ({
        ...message,
        chatId: message.chatId.toString(),
      }));
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao recuperar as mensagens do banco de dados');
    }
  }
}
