import fastify from 'fastify'
import { knex } from './database'
import { env } from '../env'

const server = fastify()

server.get('/', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

server
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`HTTP server running on http://localhost:${env.PORT}`)
  })
