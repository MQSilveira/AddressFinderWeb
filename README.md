# AddressFinderWeb
Este é um projeto ReactJS que permite aos usuários inserir um CEP e obter todos os dados correspondentes a esse CEP. A aplicação realiza consultas no banco de dados local através de requisições para uma API local. Caso o CEP não esteja cadastrado no banco de dados, a aplicação consome a API do ViaCEP para obter as informações necessárias.

Além disso, o projeto oferece a funcionalidade de acessar todos os CEPs contidos no banco de dados, permitindo ordená-los de acordo com a preferência do usuário.

# Funcionalidades
**Consulta de CEP:**
  - Os usuários podem inserir um CEP na interface.
  - A aplicação verifica se o CEP está cadastrado no banco de dados local.
  - Caso não esteja cadastrado, a aplicação consome a API do ViaCEP para obter os dados.

**Listagem e Ordenação de CEPs:**
  - Exibe todos os CEPs cadastrados no banco de dados.
  - Permite aos usuários ordenar os CEPs de acordo com critérios específicos.

## Pré-requisitos
*Certifique-se de ter o Node.js e o npm instalados em sua máquina antes de executar o projeto.*
```
npm install
```
## Como executar o projeto
```
npm start
```
Acesse `http://localhost:3000` para visualizar a aplicação no navegador.

# Repositório da API Backend (Node.js)
  *O backend para este projeto foi desenvolvido em Node.js e está disponível no seguinte repositório:*

  [Repositório da API Backend](https://github.com/MQSilveira/NodeDbInserter)

Certifique-se de configurar e executar o backend antes de iniciar a aplicação React.

