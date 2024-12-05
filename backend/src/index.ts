import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { postRouter } from './routes/post'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET:string
  },
	Variables : {
		userId: string
	}
}>()

app.use('/api/*',cors())

// Routes
app.route('/api/v1/user', userRouter);
app.route('/api/v1/post', postRouter);


export default app
