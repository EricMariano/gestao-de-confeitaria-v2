# CRM Confeitaria

Gestão de Confeitaria é uma aplicação web dedicada à gestão de confeitaria, permitindo a visualização de dashboards, gerenciamento de pedidos, ingredientes e receitas com uma interface moderna e responsiva. Por ora apenas o front (Next).

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
- [Recursos](#recursos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)

## Visão Geral

O CRM Confeitaria foi desenvolvido para facilitar a administração de uma confeitaria, reunindo informações importantes em um dashboard intuitivo e oferecendo módulos específicos para pedidos, ingredientes e receitas.  
A aplicação utiliza React para a interface do usuário, Recharts para a visualização de dados e Tailwind CSS em conjunto com Shadcn UI para componentes estilizados.

## Recursos

- **Dashboard Dinâmico:** Visualização de dados com gráficos responsivos (ex: vendas mensais).
- **Gestão de Pedidos:** Monitoramento dos pedidos realizados.
- **Controle de Ingredientes:** Listagem e gerenciamento dos ingredientes utilizados.
- **Cadastro e Gestão de Receitas:** Criação e gerenciamento de receitas.
- **EM DESENVOLVIMENTO** 

## Tecnologias Utilizadas

- **Framework:** Next.js (React)
- **Visualização de Dados:** Recharts (v2.15.1) + Shadcn UI 
- **Estilização:** Tailwind CSS (v4.0.12)
- **Biblioteca de Componentes:**  Shadcn UI e Aceternity UI
- **Build Tool:** Next.js (com suporte a SSR/SSG)
- **Linting:** ESLint com plugins específicos para React e hooks

## Para o futuro:
- **Backend:** Java ou Typescript
- **Banco de Dados:** Postgresql
- **Pagamento:** Stripe
- **Bot WhatsApp:** Python - Atendimento/Suporte Automatizado

## Instalação e Execução

### Pré-requisitos

- Node.js (v16 ou superior)
- Yarn ou npm

### Passos para Instalar e Executar

1. **Clone o repositório**
   ```bash
    git clone <URL_DO_REPOSITORIO>
    cd gestao-de-confeitaria-v2
2. **Instale as dependências**
    ```bash
    npm install
    # ou, se estiver utilizando Yarn:
    # yarn install
3. **Inicie o servidor de desenvolvimento**
    ```bash
    npm run dev
    # ou, com Yarn:
    # yarn dev
