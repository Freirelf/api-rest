import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT || 4000,
  })
  .then(() => {
    console.log(`HTTP server running on http://localhost:${env.PORT}`)
  })
