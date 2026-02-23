import NextAuth, { NextAuthConfig } from "next-auth";
import { authConfig } from "./lib/auth.config";
import {createNewUser} from "./utils/user";


export const { handlers, signIn, signOut, auth } = NextAuth({
 ...authConfig,
 session: {
  strategy: "jwt",
 },
 callbacks: {
  async jwt({ token, user, account }) {
    if (account) {
        token.accessToken = account.access_token;
    }
    if(user) {
        token.id = user.id;
        createNewUser(user);
    }
    return token;
  },

  async session({ session, token }) {
    session.user.id = token.id as string;
    (session.user as any).accessToken = token.accessToken; // eslint-disable-line @typescript-eslint/no-explicit-any

    return session;
  },

  redirect() {
    return "/";
  }
 },
 trustHost: true
} satisfies NextAuthConfig);