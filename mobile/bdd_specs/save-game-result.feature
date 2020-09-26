
# language: pt
Funcionalidade: Salvar Resultado do Jogo
Como um jogador online
Quero que o sistema salve o resultado do jogo
Para que eu possa ver meu desempenho e subir no ranking

Cenário: Com internet
Dado que o jogador tenha conexão com a internet
Quando o jogador finaliza uma partida
Então o sistema deve salvar sua pontuação no banco de dados através de uma API
E mostrar a pontuação para o jogador

Dado que o jogador tenha conexão com a internet
Quando o jogador interrompe uma partida sem finaliza-la 
E pressionando o botão voltar do aparelho
Então o sistema não salva sua pontuação atual 

Cenário: Sem internet

    Como um jogador offline
    Quero que o sistema não salve minha pontuação 
    Para que eu não perca minha colocação no ranking

Cenário: Perda de conexão no meio da partida
Dado que o jogador perda a conexão no meio da partida
Então o sistema deve emitir uma mensagem ao jogador 
E manter o resultado do jogo no cache
Então enviar para a API quando a conexão estabilizar novamente



