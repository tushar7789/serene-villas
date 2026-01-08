import NextAuth, { NextAuthConfig } from "next-auth";
import { authConfig } from "./lib/auth.config";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {prisma} from "./lib/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
 ...authConfig,
 adapter: PrismaAdapter(prisma),
 session: {
  strategy: "jwt",
 },
 pages: {
  signIn: "/auth/login",
  signOut: "/auth/logout"
 },
 callbacks: {
  async jwt({ token, user, account }) {
    // console.log("account in jwt: ", {account, user, token});
    if (account) {
        token.accessToken = account.access_token;
    }

    if(user) {
        token.id = user.id;
    }
    return token;
  },

  async session({ session, token }) {
    // console.log("account in session: ", {session, token});
    session.user.id = token.id as string;
    (session.user as any).accessToken = token.accessToken; // eslint-disable-line @typescript-eslint/no-explicit-any

    return session;
  },
 },
 trustHost: true
} satisfies NextAuthConfig);