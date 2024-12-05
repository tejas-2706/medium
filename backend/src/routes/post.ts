import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostBody, updatePostBody } from "@tejas_p/medium-common";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const postRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET:string
      },
        Variables : {
            userId: string
        }
    }>();

// Middleware
postRouter.use('/*', async (c, next) => {
    const header = c.req.header("Authorization") || "";
    if(!header){
      c.status(401);
      return c.json({error: "Not Logged In"})
    }
    try {
        const token = header.split(" ")[1]
        const user = await verify(token,c.env.JWT_SECRET)
        if(user.id) {
          c.set('userId',String(user.id))
          await next()
        }else{
          c.status(403);
          return c.json({error: "Not Logged In"})
        }
    } catch (error) {
        c.status(403);
        return c.json({
            message: "Not Logged In"
        })
    }
  })


// BLOG ROUTES
postRouter.post('/', async(c) => {
    const body = await c.req.json();
    const {success} = createPostBody.safeParse(body);
    if(!success) {
        c.status(411)
        return c.json({
            message: "Incorrect Input"
        })
    }
    const authorId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId:authorId
        }
    })
    return c.json({
        id:post.id
    })
})

postRouter.put('/', async(c) => {
    const body = await c.req.json();
    const {success} = updatePostBody.safeParse(body);
    if(!success) {
        c.status(411)
        return c.json({
            message: "Incorrect Input"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const post = await prisma.post.update({
        where: {
            id: body.id
        },data: {
            title: body.title,
            content: body.content
        }
    })
    return c.json({
        id:post.id
    })
})


postRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const post = await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });

    return c.json({
        post
    })
})


postRouter.get('/:id', async(c) => {
    const id = c.req.param("id")
    // const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const post = await prisma.post.findFirst({
            where: {
                id: id
            },
            select:{
                content:true,
                title:true,
                id:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })
        return c.json({
            post
        })
    } catch (error) {
        console.log(error);
        return c.json({
            message: "Not found Post"
        })
    }
})

