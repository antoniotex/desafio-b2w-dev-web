<h1 align='center'>Desafio Desenvolvedor Web B2W Digital</h1>

## Descrição do Projeto
Nosso desafio consiste na implementação de um módulo Node.js que permita receber o URL de um produto da americanas.com e retorne um JSON com informação deste produto, com base em uma página de produto qualquer do marketplace da [americanas.com.br](https://www.americanas.com.br/).

## Tecnologias
+ Javascript
    + [NodeJS](https://reactjs.org/)
        + [Cheerio](https://cheerio.js.org/)
        + [Node-Fetch](https://github.com/bitinn/node-fetch)
        + [Jest](https://jestjs.io/)


## Instruções
### Clonar e importar o módulo
Certifique-se que vocêe tenha instalado no seu computador o NodeJS, NPM e GIT

Clone o repositório digitando no seu terminal, no direrório escolhido por você
```
git clone https://github.com/antoniotex/desafio-b2w-dev-web.git
```

Após terminar o download, acesse a pasta e instale as depêndencias
```
cd desafio-b2w-dev-web
npm install
```

Saia da pasta
```
cd ..
```
Crie um arquivo javascript. Ex.: obterProduto.js
```
touch obterProduto.js
```
Importe a função de obter dados do produto, do módulo clonado
```
const getProduct = require('./desafio-b2w-dev-web')
```
Execute a função passando a URL de um produto da americanas.com.br
```
getProduct('https://www.americanas.com.br/produto/133718358/')
```
Você deverá ver o resultado abaixo no seu console
<br>
<a href="https://i.ibb.co/pnm262d/Screenshot-6.jpg"><img src="https://i.ibb.co/pnm262d/Screenshot-6.jpg" alt="Print do resultado da busca por produto, impresso no terminal" width="400"></a>

##Testes
Para este módulo foi utilizado o Jest para alguns testes unitários
<br>
Acesse o diretório principal do módulo (onde fica o packagee.json) e execute
```
npm test