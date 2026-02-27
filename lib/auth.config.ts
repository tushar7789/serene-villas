import {NextAuthConfig, CredentialsSignin}  from "next-auth";
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google";
import Users from "../models/users";
import argon2 from "argon2"
import {z} from "zod"
import dbConnect from "./mongoose";

export const loginSchema = z.object({ 
  email: z.email(), 
  password: z.string().min(6) 
})

// class InvalidCredential extends CredentialsSignin {
//   constructor () {
//     super('Invalid email or password');
//   }
// } 

// class InvalidCredentialOrNoUser extends CredentialsSignin {
//   constructor () {
//     super('Invalid credentials or User does not exist');
//   }
// }

export const authConfig: NextAuthConfig = {
  providers: [Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      credentials: { email: {}, password: {} },

      async authorize(credentials) {
        await dbConnect();
        
        const validated = loginSchema.safeParse(credentials);
        if (!validated.success) return null;

        const { email, password } = validated.data;

        const user = await Users.findOne({email : email});
        if (!user || !user.hashedPassword) return null;

        const passwordsMatch = await argon2.verify(user.hashedPassword as any, password); // eslint-disable-line @typescript-eslint/no-explicit-any

        if (passwordsMatch) {
          return { id: user.id, email: user.email, name: user?.name };
        }
        return null;
      }
    })
  ],
};