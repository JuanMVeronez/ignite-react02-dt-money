import { createContext,ReactNode,useEffect, useState } from "react";
import { api } from "./services/api";

export type Transaction = {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw';
  amount: number;
  category: string;
  createdAt: string;
}

// type InputTrasaction = {
//   title: string;
//   type: 'deposit' | 'withdraw';
//   amount: number;
//   category: string;
// }
// ou
//type InputTrasaction = Pick<Transaction, 'title' | 'type' | 'amount' | 'category'> // herda o type com base nos valores passados no Pick (um a um)
// ou
type InputTrasaction = Omit<Transaction, 'id' | 'createdAt'> // herda todos os types do type menos os passados no valor

type ContextProviderProps = {
  children: ReactNode
}

type TransactionsContextData = {
  transactions: Transaction[]
  createTransaction: (transaction: InputTrasaction) => void
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}: ContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  
  useEffect(() => {
    api.get<{transactions: Transaction[]}>('transactions')
    .then(res => {
      console.log(res.data)
      setTransactions(res.data.transactions)
    })
  }, [])

  function createTransaction(transaction: InputTrasaction) {
   api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}