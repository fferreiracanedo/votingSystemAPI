import fastify from 'fastify'
import {createPoll} from "../http/routes/create-poll"
import { getPoll } from './routes/get-poll'
import cookie from '@fastify/cookie'
import { voteOnPoll } from './routes/vote-on-poll'
import websocket from '@fastify/websocket'
import { pollResults } from './ws/poll-results'
const app = fastify()

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)
app.register(cookie , {
  secret: "7E1986A712410B80CBEE8F330DDE629CC8E67518", 
  hook: 'onRequest', 
  parseOptions: {}  
})
app.register(websocket)
app.register(pollResults)

app.listen({port : 3333}).then(() => {
  console.log('HTTP Server Running!')
})