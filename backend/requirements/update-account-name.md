# Atualizar o Nome da Conta

> ## Caso de sucesso

1. Recebe uma requisição do tipo **POST** na rota **/api/login**
2. Valida se a requisição foi feita por um **usuário**
3. Valida dados obrigatórios **name**
4. Retorna **200** com o nome do usuário e o email

> ## Exceções

1. Retorna erro **404** se a API não existir
2. Retorna erro **403** se não for um usuário
3. Retorna erro **400** se name não for fornecido pelo client
4. Retorna erro **500** se der erro ao tentar atualizar o nome da conta