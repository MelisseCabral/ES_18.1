***
<h1 align="right" > Universidade Federal do Ceará<br>Engenharia da Computação

<br>
<br>

<h2 align="right" >Documento de Sistema<br> PosGRAD V.0.6
<br>
<br>
<br>
<br>
<br>
<br>

Histórico de Revisões
---------------------

  |**Data**    | **Versão** |  **Descrição**                                                                        |    **Autor**   |
  |------------|------------| --------------------------------------------------------------------------------------|----------------|
  | 28/05/2018 | 0.1        | Definição inicial de Layout                                                           | @MelisseCabral |
  | 30/05/2018 | 0.2        | Navegação de menu e telas                                                             | @MelisseCabral |
  | 02/06/2018 | 0.3        | Implementação do sistema de login e cadastro de novo usuários                         | @MelisseCabral |
  | 03/06/2018 | 0.4        | Responsividade parcial para dispositivos móveis                                       | @MelisseCabral |
  | 27/06/2018 | 0.5        | Implementação das funções de cadastro e listagem das entidades                        | @MelisseCabral |
  |            | 0.6        |                                                                                       |                |
  |            | 0.7        |                                                                                       |                |
  |            | 0.8        |                                                                                       |                | 
  |            | 0.9        |                                                                                       |                |
  |            | 1.0        |                                                                                       |                | 
  
  <br>

Sumário
=======
 1. [Introdução](#introdução)<br>
    1.1 [Visão Geral](#visão-geral)<br>
    1.2 [Descriçao Geral do Sistema](#descrição-geral-do-sistema)<br>
    1.3 [Acrônimos e Abreviações](#acrônimos-e-abreviações)
 2. [Requisitos](#requisitos)<br>
    2.1 [Requisitos Funcionais](#requisitos-funcionais)<br>
    2.2 [Requisitos Não Funcionais](#requisitos-não-funcionais)
 3. [Funcionalidades](#funcionalidades)
 4. [Arquitetura do Sistema](#arquitetura-do-sistema)<br>
    4.1 [Modelo](#modelo)<br>
 5. [Programa e Execução do Software](#programa-e-execução-do-software)<br>
    5.1 [Propósito](#propósito)<br>
    5.2 [Gestão de configuração](#gestão-de-configuração)<br>
 6. [Representação do Software](#representação-do-software)<br>
    6.1 [Funções disponíveis na versão](#funções-disponíveis-na-versão)<br>
    6.2 [Procedimentos para execução](#procedimentos-para-execução)<br>

1. Introdução
==========

<p>Esse projeto está focado no usuário que necessita de uma interface
amigável. Promovendo por meio da simplicidade de layout a descomplexidade no
uso, facilidade até mesmo ao mais inexperiente usuário. Este projeto traz o
desenvolvimento de um sistema de gerenciamento de pós-graduação, de forma a
facilitar os processos em um sistema computacional simples e fácil de usar.
Este sistema deve fazer com que o professor consiga administrar melhor os 
seus alunos, projetos, entre outros.<p/>

<p>Este documento está organizado em várias seções com o conteúdo específico,
na qual esta foi a seção 1. A **seção 2** mostra uma visão geral do
escopo do projeto. A **seção 3** descreve os requisitos funcionais da
aplicação. A **seção 4** descreve os requisitos não-funcionais. A
**seção 5** apresenta os diagramas dos casos de uso. A **seção 6**
descreve os casos de uso da aplicação. A **seção 7** mostra o modelo
navegacional da aplicação.<p/>
2. Visão Geral
-----------

### Descrição Geral do sistema
<p></p>
<p>O sistema a ser desenvolvido é voltado para
o gerenciamento de pós-graduação. O mesmo deve trazer funcionalidades
como o cadastro de alunos, de financiadores, de programa de fomento,
de area de concentração, entre outros. O sistema deve trazer um melhore
gerenciamento, podendo até pesquisar qualquer um dos itens cadastrados e
até gerar relatórios.

### Acrônimos e Abreviações
<p>[Essa sub-seção deve mostrar as definições de todos os termos, acrônimos e abreviações necessárias para a interpretação desse plano.]</p>

Requisitos
==========

   Requisitos Funcionais:
   ----------------------

 
### Login

<p>Consiste em uma tela de e de um sistema de autenticação, que compara a
chave inserida, com a salva no servidor.<p/>

### Cadastro

<p>Permite a criação de um usuário, ou seja de um novo campo na tabela
*users* do banco de dados.<p/>

### Remoção de Conta

<p>Solicitado usuário sua senha, prosseguida de uma tela de autenticação
por senha para que haja confirmação da real intenção.<p/>

### Alteração de Conta

Modificação de parâmetros da conta, como nome de usuário, email, e
senha. Verificando sempre se há no sistema alguém com os respectivos
nomes de usuários e email, não podendo fazer e reportando erro em caso
de tentativa de duplicidade de parâmetros.

### Contato

Tela que permite o envio de mensagem reportando, erro, problema,
solução ou elogio ao email da empresa.

  Requisitos Não Funcionais:
  --------------------------
<br>

### Conexão com o banco de dados

O tipo de banco de dados utilizado para a aplicação foi o No-SQL, que
apresenta melhor desempenho quando comparado a outros modelos de banco
de dados. Está hospedado em uma plataforma que oferece além de
desempenho, segurança de altíssima disponibilidade em nível global.

### Autenticação

  Devido ao uso da plataforma Firebase tornou-se possível uma abstração
da autenticação, processo dificultoso sem ela, no que se mostra o
salvamento da seção.

Funcionalidades:
================
  User Stories:
  -------------
<br>
<b>US1:</b>Como doscente, gostaria de ter criar uma conta.<br>
<b>Cliente:</b> Doscente.<br>
<b>Funcionalidade:</b> Criação de conta para professores da pos graduação.<br>
<b>Funcionalidade:</b> Cadastro de alunos da pos graduação.<br>
<b>Funcionalidade:</b> Cadastro de financiadores.<br>
<b>Funcionalidade:</b> Cadastro de programa de fomento.<br>
<b>Funcionalidade:</b> Cadastro de area de concentração.<br>
<b>Funcionalidade:</b> Cadastro de linha de pesquisa.<br>
<b>Funcionalidade:</b> Cadastro de projetos.<br>
<b>Funcionalidade:</b> Cadastro de participantes externos.<br>
<b>Funcionalidade:</b> Cadastro de trabalho de conclusão.<br>
<b>Funcionalidade:</b> Cadastro de produção intelectual.<br>
<b>Funcionalidade:</b> Gerar relatórios.<br>


Arquitetura do Sistema
======================
  <p>O propósito deste documento é registrar a arquitetura proposta para o sistema de maneira abstraida, afim de expressar de forma geral o funcionamento do sistema e sua implementação.
<p/>

   Modelo
   ------
   <p><p/>

Programa e Execução do Software
===============================

<p>O propósito deste documento é registrar o código e definir os procedimentos para sua instalação e execução. Ele deve ter foco nas atividades do programador e nas necessidades dos usuários.
<p/>

### Propósito
<p>Este documento provê uma visão compreensiva do código do sistema desenvolvido usando diferentes visões para compreender diferentes aspectos do sistema.</p>

Gestão de configuração
----------------------

<p>Este documento está organizado em várias
seções com conteúdo específico. A **seção 2** mostra uma visão geral do
escopo do projeto. A **seção 3** descreve os requisitos funcionais da
aplicação. A **seção 4** descreve os requisitos não-funcionais. A
**seção 5** apresenta os diagramas dos casos de uso. A **seção 6**
descreve os casos de uso da aplicação. A **seção 7** mostra o modelo
navegacional da aplicação.<p/>


Representação do Software
=========================

   ----------------------------
   ### Funções disponíveis na versão
  <p> As funções disponíveis são as descritas anteriormente.</p>
  Procedimentos para execução
  ---------------------------
  <P>Pode-se fazer o acesso direto pelo site http://posgradufc.ga</P>
