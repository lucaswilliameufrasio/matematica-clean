# Salvar Resultado do Jogo

> ## Caso de sucesso

1. Recebe uma requisição do tipo **POST** na rota **/api/games/{operation_id}**
2. Valida se a requisição foi feita por um **usuário**
3. Valida dados obrigatórios **score**, **time**
4. Valida o parâmetro **operation_id**
5. Valida se os campo **score** e **time** são respostas válidas
6. **Busca** uma operação matemática com o id fornecido
7. **Cria** um resultado do jogo com os dados fornecidos
8. Retorna **200** com os dados do resultado do jogo

> ## Exceções

1. Retorna erro **404** se a API não existir
2. Retorna erro **403** se não for um usuário
3. Retorna erro **403** se o operation_id passado na URL for inválido
4. Retorna erro **403** se os dados enviados pelo cliente for inválida
5. Retorna erro **500** se der erro ao tentar criar o resultado do jogo
6. Retorna erro **500** se der erro ao tentar carregar a operação
