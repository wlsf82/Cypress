# Cypress POC

## Pré-condições

NodeJS instalado no ambiente local (v8+).

## Instalação

Execute `npm i` para instalar as dependências de desenvolvimento

## Executando os testes

Execute `npm run cypress` para executar o Cypress em modo interativo e então clique no botão *Run all specs*.

Execute `npm t` para executar os testes em modo *headless*.

Execute `npm run headed` para executar os testes em modo *headed*.

Execute `npm 

## Pros e Contras do *Cypress*

**Pros**
* Ótima documentação.
* Instalação simples e direta.
* Rapida execução dos testes.
* Oferece execução de testes paralelos.
* É possivel navegar pela stack de teste e ver passo a passo à execução.
* A execução do teste é recarregada automaticamente após as alterações feitas no código.

**Contras**
* Suporte somente para o ***chrome***.
  > - Esta no roadmap para implementar.

* Localizadores como ***xpaths*** não é suportada.
  > - Não é uma boa, até onde estudei.

* Acima de 500 testes, é necessário comprar.
  > - 😩 😩 😩 😩 😩
