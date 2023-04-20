#  FCLX - Desafio 2 

## Informações do desafio
Neste desafio, você deve criar uma aplicação Next.js com Docker que rode na porta 3000.
Esta aplicação precisa expor 2 rotas de API Rest:


- Criar chat - POST /api/chats

- Listar chats - GET /api/chats


Um chat tem 2 dados, o ID é auto-incrementado e a mensagem que é string.


O Next.js precisa salvar e buscar os dados do banco de dados usando o Prisma, o banco de dados a ser utilizado precisa ser o SQLite e precisa ser commitado no projeto.


Crie o arquivo api.http para declarar as 2 chamadas a serem realizadas.


## Como rodar a aplicação

Siga os seguintes passos:

```
npm install
docker-compose up -d
docker-compose exec -it fclx-desafio-2_app_1 bash
npm run dev
```

Em seguida, use o arquivo `api.http` para enviar as requisições juntamente com a extensão `REST Client` do VSCode.
