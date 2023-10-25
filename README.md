# Aplicação Fullstack - Gerenciamento de Mensagens com Integração do Bot do Telegram

Esta é uma aplicação fullstack construída com NestJS, Docker Compose, Prisma ORM e Vue.js. A aplicação é projetada para gerenciar mensagens recebidas e enviar mensagens via um bot do Telegram.

## Backend (NestJS)

O backend desta aplicação é construído usando o NestJS, um poderoso framework Node.js. Ele fornece uma base robusta e escalável para a construção de aplicativos do lado do servidor.

### Recursos

- APIs RESTful para gerenciar mensagens recebidas
- Integração com a API do Bot do Telegram para enviar mensagens
- Integração de banco de dados PostgreSQL usando o Prisma ORM

### Configuração

1. Clone o repositório:

```bash
git clone <repository-url>
```

2. Instale as dependências:

```bash
cd backend
npm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` no diretório `backend`
   - Adicione as variáveis de ambiente necessárias (por exemplo, token da API do Bot do Telegram, credenciais do banco de dados)

4. Inicie o servidor backend:

```bash
npm run start:dev
```

## Banco de Dados (PostgreSQL com Docker Compose)

A aplicação usa o Docker Compose para configurar um banco de dados PostgreSQL. O Docker Compose permite a fácil containerização e gerenciamento do banco de dados.

### Configuração

1. Instale o Docker e o Docker Compose em sua máquina.

2. Navegue até o diretório raiz do projeto.

3. Inicie o contêiner do banco de dados:

```bash
docker-compose up -d
```

## Frontend (Vue.js)

O frontend desta aplicação é construído usando o Vue.js, um framework JavaScript progressivo. Ele fornece uma interface de usuário intuitiva para gerenciar mensagens recebidas e interagir com o bot do Telegram.

### Recursos

- Exibir mensagens recebidas em uma tabela
- Enviar mensagens via bot do Telegram

### Configuração

1. Instale as dependências:

```bash
cd frontend
npm install
```

2. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` no diretório `frontend`
   - Adicione as variáveis de ambiente necessárias (por exemplo, URL da API backend)

3. Inicie o servidor de desenvolvimento frontend:

```bash
npm run serve
```

4. Abra seu navegador e acesse a aplicação em `http://localhost:8080`.

## Conclusão

Parabéns! Agora você tem uma aplicação fullstack para gerenciar mensagens recebidas e enviar mensagens via um bot do Telegram. O backend é construído com NestJS, o banco de dados é configurado com Docker Compose e o frontend é construído com Vue.js.


____________________________________________________________________________________________________________________________________________________________________________________________________________
# Fullstack Application - Message Management with Telegram Bot Integration

This is a fullstack application built with NestJS, Docker Compose, Prisma ORM, and Vue.js. The application is designed to manage received messages and send messages via a Telegram bot.

## Backend (NestJS)

The backend of this application is built using NestJS, a powerful Node.js framework. It provides a robust and scalable foundation for building server-side applications.

### Features

- RESTful APIs for managing received messages
- Integration with Telegram Bot API for sending messages
- PostgreSQL database integration using Prisma ORM

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install the dependencies:

```bash
cd backend
npm install
```

3. Configure the environment variables:
   - Create a `.env` file in the `backend` directory
   - Add the necessary environment variables (e.g., Telegram Bot API token, database credentials)

4. Start the backend server:

```bash
npm run start:dev
```

## Database (PostgreSQL with Docker Compose)

The application uses Docker Compose to set up a PostgreSQL database. Docker Compose allows for easy containerization and management of the database.

### Setup

1. Install Docker and Docker Compose on your machine.

2. Navigate to the root directory of the project.

3. Start the database container:

```bash
docker-compose up -d
```

## Frontend (Vue.js)

The frontend of this application is built using Vue.js, a progressive JavaScript framework. It provides an intuitive user interface for managing received messages and interacting with the Telegram bot.

### Features

- Display received messages in a table
- Send messages via the Telegram bot

### Setup

1. Install the dependencies:

```bash
cd frontend
npm install
```

2. Configure the environment variables:
   - Create a `.env` file in the `frontend` directory
   - Add the necessary environment variables (e.g., backend API URL)

3. Start the frontend development server:

```bash
npm run serve
```

4. Open your browser and access the application at `http://localhost:8080`.

## Conclusion

Congratulations! You now have a fullstack application for managing received messages and sending messages via a Telegram bot. The backend is built with NestJS, the database is managed using Docker Compose with PostgreSQL, and the frontend is developed using Vue.js. Feel free to explore and enhance the application based on your requirements.