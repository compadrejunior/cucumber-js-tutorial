# language: pt
Funcionalidade: Pesquisar no Google
  Para pode encontrar o resultado pesquisado
  Como um usuário
  Eu quero poder pesquisar por termos no site Google

  Cenario: Pesquisar pelo site da OAT
    Dado que o usuário navegue até o site www.google.com
    Quando o usuário clicar no campo de pesquisa
    E digitar o valor "OAT Solutions"
    E pressionar enter
    Entao o site da OAT deverá ser exibido na lista de resultados

