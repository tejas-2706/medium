import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign} from 'hono/jwt'
import { signinBody, signupBody } from "@tejas_p/medium-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET:string
      },
        Variables : {
            userId: string
        }
    }>();

// USER ROUTES
userRouter.post('/signup', async(c) => {
    const body = await c.req.json()
    const {success} = signupBody.safeParse(body);
    if(!success) {
        c.status(411);
        return c.json({
            message: "Incorrect Input"
        })
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
      const user = await prisma.user.create({
        data:{
          email:body.email,
          name:body.name,
          password:body.password
        }
      })
      const jwt = await sign({id:user.id}, c.env.JWT_SECRET);
      return c.json({jwt});
    } catch (error) {
      c.status(403)
      return c.json({error: "erroe while sign up"})
    }
  })
  
  userRouter.post('/signin', async(c) => {
    const body = await c.req.json();
    const {success} = signinBody.safeParse(body);
    if(!success) {
        c.status(411)
        return c.json({
            message: "Incorrect Input"
        })
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
      const user = await prisma.user.findUnique({
        where: {
          email:body.email,
          password:body.password
      }
    })
  
    if(!user){
      c.status(403)
      return c.json({error:"User not found"})
    }
  
    const jwt = await sign({id:user.id},c.env.JWT_SECRET);
    return c.json({jwt})
  
    } catch (error) {
      c.status(403)
      return c.json({error:"User not found"})
    }
  })
  