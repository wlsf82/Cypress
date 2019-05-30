## Como organizar a casa? 🤔
***

Cria uma pasta!
```sh
$ mkdir <folder>
$ cd <folder>
```


Adiciona o *.gitignore*
```sh
$ touch .gitignore
```

Dentro do *.gitignore* adiciona:
```
.DS_Store
node_modules
videos
tags
```

Iniciando o projeto!
```sh
$ npm init
```
> Caso queira mudar alguma configuração padrão mude, caso contrario é só meter o dedo no *enter*.

Instalando o *cypress*.
```sh
$ npm i cypress -D
```

Testando para ver se o *cypress* esta supimpa.
```sh
$ cypress open 
```

***Pronto para brincar! 🚀***

***

## Pros e Contras do *cypress*
***

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
