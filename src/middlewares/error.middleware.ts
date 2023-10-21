import { HttpException, ArgumentsHost, Catch } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch()
export class ErrorMiddleware {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const message = exception.message || 'Ocorreu um erro inesperado.';
      response.status(status).json({ message });
    } else if (
      exception instanceof Prisma.PrismaClientKnownRequestError ||
      exception instanceof Prisma.PrismaClientUnknownRequestError ||
      exception instanceof Prisma.PrismaClientValidationError
    ) {
      let status: number;
      if (exception instanceof Prisma.PrismaClientKnownRequestError) {
        status = 409; // Erro interno do servidor
      } else {
        status = 400; // Requisição inválida
      }

      const message =
        exception.message ||
        'Ocorreu um erro inesperado na operação do banco de dados.';
      response.status(status).json({ message });
    } else {
      response.status(500).json({ message: 'Ocorreu um erro inesperado.' });
    }
  }
}
