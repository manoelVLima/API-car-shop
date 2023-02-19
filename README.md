# Car Shop API
  
  Aplicação desenvolvida durante o módulo de Back-end do curso de Desenvolvimento Web da [Trybe](https://www.betrybe.com/). Consiste na criação de uma API de gerenciamento de uma concessionária de veículos.
  
## Tecnologias e ferramentas

  - NodeJS
  - Express
  - Typescript
  - MongoDB
  - Mongoose
  - Chai
  - Mocha 
  - Sinon
  - Docker
## Rodando o projeto localmente

Clone o projeto utilizando o comando:
   `git clone https://github.com/manoelVLima/car-shop-api.git`

 Acesse a pasta do projeto e rode o romando: `npm install` para instalar as dependências do projeto.

 Rode o comando `npm run dev` em seguida para iniciar o servidor localmente. E a partir disso você precisará de um software para testar as rotas da API como por exemplo o Postman ou Insonmia, em caso de estar usando o Visual Code, você pode testar através da extensão ThunderClient.

 Será necessário configurar o banco de dados MongoDB através do arquivo .env contigo no projeto. Caso opte por rodar através do docker, ao abrir o projeto rode o comando `docker-compose up -d` e rode o servidor dentro do container
## Rotas 

- ### POST `/cars`

  <details>

  Rota responsável pela adição de um novo carro ao banco de dados. Recebe como corpo da requisição o seguinte JSON:
  ```json
  {
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.990,
    "doorsQty": 4,
    "seatsQty": 5
  }
  ```
  Se a resposta for um sucesso, será retornado o seguinte JSON:
  ```json
  {
    "id": "63ead3f079303cdd3fca52b5",
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.990,
    "doorsQty": 4,
    "seatsQty": 5
  }
 </details>

---

- ### POST `/motorcycles`

  <details>
  
  Rota responsável pela adição de uma nova motocicleta ao banco de dados. Recebe como corpo da requisição o seguinte JSON:
  ```json
  {
    "model": "Honda Cb 600f Hornet",
    "year": 2005,
    "color": "Yellow",
    "status": true,
    "buyValue": 30.000,
    "category": "Street",
    "engineCapacity": 600
  }
  ```
  Se a resposta for um sucesso, o servidor irá retornar o seguinte objeto JSON:
  ```json
    {
      "id": "63eadef2225ffff17972f1ba",
      "model": "Honda Cb 600f Hornet",
      "year": 2005,
      "color": "Yellow",
      "status": true,
      "buyValue": 30,
      "category": "Street",
      "engineCapacity": 600
    }
    ```
  </details>
  
  ---
  
- ### GET `/cars`

  <details>
  
  Rota responsável pelo retorno de todos os carros do banco de dados

  Se a resposta for um sucesso, o servidor irá retornar o seguinte objeto JSON contendo todos os carros em formato de array:
  ````json
    [
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Marea",
        "year": 2002,
        "color": "Black",
        "status": true,
        "buyValue": 15.99,
        "doorsQty": 4,
        "seatsQty": 5
      },
      {
        "id": "634852326b35b59438fbea31",
        "model": "Tempra",
        "year": 1995,
        "color": "Black",
        "buyValue": 39,
        "doorsQty": 2,
        "seatsQty": 5
      }
    ]
 </details>
 
 ---
 
- ### GET `/motorcycles`

  <details>
  
  Rota responsável pelo retorno de todos as motocicletas do banco de dados

  Se a resposta for um sucesso, o servidor irá retornar o seguinte objeto JSON contendo todos as motocicletas em formato de array:
  ````json
    [
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Honda Cb 600f Hornet",
        "year": 2005,
        "color": "Yellow",
        "status": true,
        "buyValue": 30.000,
        "category": "Street",
        "engineCapacity": 600
      },
      {
        "id": "634852326b35b59438fbea31",
        "model": "Honda Cbr 1000rr",
        "year": 2011,
        "color": "Orange",
        "status": true,
        "buyValue": 59.900,
        "category": "Street",
        "engineCapacity": 1000
      }
    ]
 </details>
 
  ---
  
- ### GET `/cars/:id`

  <details>
  
  Rota responsável pelo busca de um carro pelo seu Id.

  Se a resposta for um sucesso, o servidor irá retornar o seguinte objeto JSON contendo as informações do carro que foi buscado.
  ````json
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Marea",
      "year": 2002,
      "color": "Black",
      "status": true,
      "buyValue": 15.99,
      "doorsQty": 4,
      "seatsQty": 5
    }
 </details>
 
 ---
- ### GET `/motorcycles/:id`

  <details>
  
  Rota responsável pelo busca de uma motocicleta pelo seu Id.

  Se a resposta for um sucesso, o servidor irá retornar o seguinte objeto JSON contendo as informações da motocicleta que foi buscada.
  ```json
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Honda Cb 600f Hornet",
      "year": 2005,
      "color": "Yellow",
      "status": true,
      "buyValue": 30.000,
      "category": "Street",
      "engineCapacity": 600
    }
 </details>
 
  ---
  
- ### PUT `/cars/:id`

  <details>
    Rota responsável pela edição/alteração de algum carro do banco de dados.
  
    O corpo da requisição deverá vim no seguinte formato:
  
  ```json
    {
      "model": "Marea",
      "year": 1992,
      "color": "Red",
      "status": true,
      "buyValue": 12.000,
      "doorsQty": 2,
      "seatsQty": 5
    }
    ```
    Se o retorno for um sucesso, o servidor trará um objeto JSON contendo as informações atualizadas do carro.
  
    ```json
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Marea",
      "year": 1992,
      "color": "Red",
      "status": true,
      "buyValue": 12.000,
      "doorsQty": 2,
      "seatsQty": 5
    }
    ```
  </details>
  
  ---
  
- ### PUT `/motorcycles/:id`

  <details>
    Rota responsável pela edição/alteração de alguma motocicleta do banco de dados.
  
    O corpo da requisição deverá vim no seguinte formato:
     ```json
    {
      "model": "Honda Cb 600f Hornet",
      "year": 2014,
      "color": "Red",
      "status": true,
      "buyValue": 45.000,
      "category": "Street",
      "engineCapacity": 600
    }
    ```
    Se o retorno for um sucesso, o servidor trará um objeto JSON contendo as informações atualizadas da motocicleta.
    ```json
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Honda Cb 600f Hornet",
      "year": 2014,
      "color": "Red",
      "status": true,
      "buyValue": 45.000,
      "category": "Street",
      "engineCapacity": 600
    }
 </details>
 
 ---
 
 Projeto desenvolvido por [Manoel Vieira Lima Junior](https://www.linkedin.com/in/manoel-vieira-lima-junior-589838127/).