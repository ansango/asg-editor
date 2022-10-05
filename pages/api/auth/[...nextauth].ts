import NextAuth, { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, credentials }) {
      const id = user.id;
      if (id === process.env.SECRET_USER_ID) {
        return true;
      }
      return false;
    },
  },
  pages: {
    signIn: "/signin",
    signOut: "/signin",
  },
};
export default NextAuth(authOptions);
