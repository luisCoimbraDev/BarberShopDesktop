import Fastify from 'fastify'
import cors from '@fastify/cors'

const app = Fastify({ logger: true })

const start = async () => {
  await app.register(cors, {
    origin: true, // dev: libera frontend local 
  })

  app.get('/ping', async () => ({ ok: true }))

  const port = Number(process.env.PORT || 3333)
  const host = '127.0.0.1' // loopback: só local
  try {
    await app.listen({ port, host })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()