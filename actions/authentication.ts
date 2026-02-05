import {prisma} from "../lib/prisma"
import argon2 from "argon2"
import {z} from "zod"

import { userExsits } from "../utils/authentication/functions"

export const createUserSchema = z.object({ 
  email: z.email(), 
  password: z.string().min(6) 
})

export async function createUser(formData: FormData) {
  const validated = createUserSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  })
  if (!validated.success) throw new Error("Invalid fields")

  const { email, password } = validated.data
  const hashedPassword = await argon2.hash(password, {
    type: argon2.argon2id,                      // Hybrid variant: best security/performance
    memoryCost: 2**16,                          // 64 MiB (adjust: 19k+ KiB recommended)
    timeCost: 2,                                // Iterations (1-3 typical)
    parallelism: 1                              // CPU lanes (1-4 typical)
  })

  await prisma.user.create({
    data: { email, hashedPassword }
  });
}


export async function signUpFunction(formData : FormData) {
    const validated = createUserSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    })
    if (!validated.success) throw new Error("Invalid fields!")

    const { email } = validated.data
    
    if(!userExsits(email)) throw Error("Account with the email already exists!");

    createUser(formData);
}
