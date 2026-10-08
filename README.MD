# DDD (Domain-driven Design)

Design dirigido à domínio

## Domínio

- Domain Experts
  - Conversa
- Linguagem ubíqua

- Usuário
  - Cliente
  - Fornecedor
  - Atendente
  - Barman

- Agregados
- Value Objects
- Eventos de domínio
- Subdomínios (Bounded Contexts)
- Entidades
- Casos de uso
# Clean Architecture

Arquitetura limpa: o código é organizado em camadas e as dependências sempre apontam para dentro (das camadas externas para o domínio).

## Camadas

- Enterprise (entidades): regras de negócio que existem independente da aplicação
- Application (casos de uso): orquestram as entidades para atender uma ação do usuário
- Interface adapters: controllers, presenters, gateways
- Frameworks & drivers: banco de dados, HTTP, serviços externos

## Regras

- O domínio não conhece banco de dados, framework ou HTTP
- Casos de uso dependem de contratos (repositórios), nunca de implementações
- Inversão de dependência: a implementação do repositório é injetada de fora

## Estrutura de pastas

- `src/core`: código compartilhado entre os domínios
- `src/domain/forum/enterprise`: entidades e value objects
- `src/domain/forum/application`: casos de uso e contratos de repositórios
- `test`: repositórios em memória e factories usados nos testes
