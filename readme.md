# API de Tickets de Suporte

Uma API para gerenciamento de tickets de suporte, permitindo a criação, atualização, listagem e exclusão de tickets para relatar problemas em equipamentos.

Este projeto foi desenvolvido **sem o uso de frameworks**, utilizando apenas módulos nativos do Node.js.

---

## Recursos da API

### Endpoints

#### 1. **Listar Tickets**
- **GET** `/tickets`
  - Lista todos os tickets. Use parâmetros de query para filtrar os tickets por status.
  - Exemplos:
    - `/tickets?status=open` - Lista apenas os tickets abertos.
    - `/tickets?status=closed` - Lista apenas os tickets fechados.

#### 2. **Criar um Ticket**
- **POST** `/tickets`
  - Cria um novo ticket.
  - Corpo da requisição (JSON):
    ```json
    {
      "equipment": "Nome do equipamento",
      "description": "Descrição do problema",
      "user_name": "Nome do usuário"
    }
    ```
  - O ticket será criado com os seguintes campos padrão:
    - `id`: Gerado automaticamente usando `randomUUID`.
    - `status`: Definido como `"open"`.
    - `created_at`: Data de criação gerada automaticamente usando `new Date()`.
    - `updated_at`: Data de modificação gerada automaticamente usando `new Date()`.

#### 3. **Atualizar um Ticket**
- **PUT** `/tickets/:id`
  - Atualiza todas as informações de um ticket existente.
  - Corpo da requisição (JSON):
    ```json
    {
      "equipment": "Novo nome do equipamento",
      "description": "Nova descrição do problema",
      "user_name": "Novo nome do usuário"
    }
    ```

#### 4. **Alterar o Status de um Ticket**
- **PATCH** `/tickets/:id`
  - Atualiza o status de um ticket e adiciona uma solução para o problema.
  - Corpo da requisição (JSON):
    ```json
    {
      "status": "closed",
      "solution": "Descrição da solução aplicada"
    }
    ```

#### 5. **Deletar um Ticket**
- **DELETE** `/tickets/:id`
  - Exclui um ticket existente com base no seu `id`.

---

## Como Executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone este repositório:
   ```bash
   git clone https://github.com/zielisgabriel/tickets-de-suporte.git
