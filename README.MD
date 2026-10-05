-Oque e DDD

-DDD me ajuda a modelar o sistema de acordo com as regras e conceitos do negócio. Clean Architecture me ajuda a separar responsabilidades e manter o domínio independente de frameworks e infraestrutura.

Por exemplo, em um sistema financeiro:

User
Account
Transaction
Invoice
Payment
Subscription

Você cria conceitos que representam o negócio.

Uma Transaction, por exemplo, pode ter regras próprias:

class Transaction {
  constructor(
    public readonly id: string,
    public readonly amount: number,
    public readonly type: "INCOME" | "EXPENSE"
  ) {}

  isExpense() {
    return this.type === "EXPENSE";
  }
}