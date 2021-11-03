Pesquisa CEP

O projeto pesquisaCEP foi desenvolvido com a finalidade de disponibilizar uma ferramenta web, capaz de fornecer ao usuário a possibilidade de obter informações sobre os CEPs desejados de uma maneira que seja simples e eficiente. Além de buscar e mostrar os dados para o usuário, a ferramenta também disponibiliza um histórico de consultas, facilitando assim refazer a consulta do CEP.

O projeto foi desenvolvido utilizando o framework **ReactJS** para o **front-end**, utilizando majoritariamente a biblioteca **styled-components** para a criação dos layouts, e comunicação entre os componentes via **PROPS**, a parte **back-end** foi desenvolvida utilizando **NodeJs** e a biblioteca **Express**, o banco de dados utilizado foi o **MongoDB**. Também foram escritos alguns testes para a API, esses testes foram escritos utilizando a ferramenta Postman, o arquivo json para que os testes possam ser visualizados dentro da ferramenta estão dentro da pasta testes.

Para facilitar a visualização do projeto, o mesmo pode ser visto em execução no link: https://teste-eureka.vercel.app (o back-end foi hospedado na plataforma **Heroku**). E a documentação da API pode ser visualizada em: https://documenter.getpostman.com/view/5204912/UUxtEqMQ


Instruções para executar o projeto

**back-end**

Para executar a parte back-end do projeto, primeiro é necessário que tenha acesso a alguma instância do **MongoDB**, local ou remoto, depois é preciso estar dentro da pasta **“back-end/pesquisacep”** e executar o comando **“yarn”** ou **“npm install”** para instalar todas as dependências do projeto, após todas as dependências serem instaladas é necessário criar um arquivo **‘.env’** contendo as variáveis **“DB_USER”** (variável responsável por armazenar o nome do usuário com acesso ao banco de dados), **“DB_PASSWORD”** (variável responsável por armazenar a senha de acesso ao banco de dados), **"DB_NAME"** (variável responsável por armazenar o nome da base de dados que será utilizada), **"DB_ADDRESS"** (variável responsável por armazenar a URL de acesso ao banco de dados), **"SERVER_PORT"** (variável responsável por armazenar o número da porta na qual o projeto irá ser executado).
Após essas etapas, o projeto pode ser executado com o comando **“yarn start”** ou **“npm run start”**

**front-end**

Para executar a parte front-end do projeto é necessário estar dentro da pasta **“front-end/pesquisacep”** e executar o comando **“yarn”** ou **“npm install”** para instalar todas as dependências do projeto, após todas as dependências serem instaladas é necessário criar um arquivo **“.env”** contendo a variável **“REACT_APP_URLBASE"** (variável responsável por armazenar a url base de acesso a parte back-end do projeto), Após essas etapas, o projeto pode ser executado com o comando **“yarn start”** ou **“npm run start”**
