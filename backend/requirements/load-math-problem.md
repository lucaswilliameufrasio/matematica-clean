# Carregar Problema Matemático

> ## Caso de sucesso

1. Recebe uma requisição do tipo **GET** na rota **/api/problems/{operation_id}**
2. Valida se a requisição foi feita por um **usuário**
3. Valida o parâmetro **operation_id**
4. Retorna **200** com os dados do problema matemático

> ## Exceções

1. Retorna erro **404** se a API não existir
2. Retorna erro **403** se não for um usuário
3. Retorna erro **403** se o operation_id passado na URL for inválido
4. Retorna erro **500** se der erro ao tentar carregar o problema matemático
5. Retorna erro **500** se der erro ao tentar listar o problema matemático
