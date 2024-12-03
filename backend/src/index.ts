import { Hono } from 'hono'
import {verify} from 'hono/jwt'
import { userRouter } from './routes/user'
import { postRouter } from './routes/post'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET:string
  },
	Variables : {
		userId: string
	}
}>()


// Routes
app.route('/api/v1/user', userRouter);
app.route('/api/v1/post', postRouter);


export default app
