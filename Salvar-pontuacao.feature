
# language: pt
Funcionalidade: Salvar Pontuação

    Como um jogador online
    Quero que o sistema salve minha pontuação
    Para que eu possa ver meu desempenho e subir no ranking

Cenário: Salvar Pontuação no banco através da API

Dado que o jogador tenha conexão com a internet
Quando o jogador finaliza uma partida
Então o sistema deve salvar sua pontuação no banco de dados através de uma API
E mostrar a pontuação para o jagodor

Característica: Jagador Offline

    Como um jogador offiline
    Quero que o sistema não salve minha pontuação 
    Para que eu não perca minha colocação no ranking

Cenário: Perda de conexão no meio da partida

Dado que o jogador perda a conexão no meio da partida
Então o sistema deve emitir uma mensagem ao jagador 
E sair do jogo mantendo a pontuação anterior 



