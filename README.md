#  FCLX - Desafio 2 

## Como rodar a aplicação

Siga os seguintes passos:

```
npm install
docker-compose up
docker exec -it fclx-desafio-2_app_1 bash
```

Dentro do container `fclx-desafio-2_app_1`, use os seguintes comandos:
```
npx prisma generate
npm run dev
```

Em seguida, use o arquivo `api.http` para enviar as requisições juntamente com a extensão `REST Client` do VSCode.
