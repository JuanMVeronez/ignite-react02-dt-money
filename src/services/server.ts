import { createServer, Model } from 'miragejs';

createServer({
  // define os models (que sao como tabelas em um banco)
  models: {
    transaction: Model,
  },
  
  // elementos para popular os models
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          amount: 6000,
          category: 'Dev',
          createdAt: new Date('2021-02-12'),
        },
        {
          id: 2,
          title: 'Aluguel casa',
          type: 'withdraw',
          amount: 1000,
          category: 'Casa',
          createdAt: new Date('2021-02-14'),
        },
        {
          id: 3,
          title: 'Comida mercado',
          type: 'withdraw',
          amount: 500,
          category: 'Casa',
          createdAt: new Date('2021-02-14'),
        },
      ]
    })
  },

  routes() {
    //nome inicial que vai ser procurado para as rotas (sendo assim será localhost:3000/api)
    this.namespace = 'api';

    this.get('/transactions', () => {
      // para acessar uma tabela é usado o this.schema
      return this.schema.all('transaction')
    })

    // o schema simboliza o elemento schema do createServer
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', {
        ...data,
        createdAt: new Date()
      });
    })
  }
})
