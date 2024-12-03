import z from "zod";

export const signupBody = z.object({
    email: z.string().email(),
    name: z.string().optional(),
    password: z.string().min(4)
})


export const signinBody = z.object({
    email: z.string().email(),
    password: z.string().min(4)
})


export const createPostBody = z.object({
    title: z.string(),
    content: z.string()
})


export const updatePostBody = z.object({
    title: z.string(),
    content: z.string(),
    id:z.string()
})

export type SignupInput = z.infer<typeof signupBody>
export type SigninInput = z.infer<typeof signinBody>
export type CreatePostInput = z.infer<typeof createPostBody>
export type UpdatePostInput = z.infer<typeof updatePostBody>