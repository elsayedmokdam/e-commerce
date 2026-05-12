import $SERVICE_REPOSITORY from "@/services/service.repo";
import { NextAuthOptions, User as NextAuthUser } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const response = await $SERVICE_REPOSITORY.Auth.signin(credentials);

        if (
          response.ok &&
          response.data.message === "success" &&
          response.data.user &&
          response.data.token
        ) {
          // Return user object with necessary properties for session.
          // This object + secret key will be used to generate the JWT token for the session.
          return {
            id: response.data.user.email,
            name: response.data.user.name,
            email: response.data.user.email,
            realToken: response.data.token,
          };
        }
        return null;
      },
    }),

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    Github({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],

  pages: {
    signIn: "/signin",
  },

  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 24 hours
  },

  callbacks: {
    // This function is called in each successful authentication and in each navigation.
    // You can use it to persist additional data in the token, such as the real token from your API or OAuth access token.
    async jwt({ token, user, account }) {
      // Persist token from custom credentials provider.
      if (user && "realToken" in user && user.realToken) {
        token.realToken = user.realToken;
      }

      // Persist OAuth access token for Google/GitHub sign in.
      if (account?.access_token) {
        token.realToken = account.access_token;
      }

      return token;
    },

    // This callback is called whenever a session is checked. We can use it to send the real token to the client along with the session data.
    // This will be called on the client side when we use the useSession hook, and on the server side when we call getSession or getServerSession or route /api/auth/session.
    async session({ session, token }) {
      // Send properties to the client
      if (token && session.user) {
        session.user.id = token.sub as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        if (token.realToken) {
          session.realToken = token.realToken;
        }
      }
      //  console.log("Session callback called with session:", session, "and token:", token);
      return session;
    },
  },

  /* cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  }, */
};

/* JWT callback called with params: {
  token: {
    name: 'Ahmed Abd Al-Muti',
    email: 'sayed.route12@gmail.com',
    picture: undefined,
    sub: undefined
  },
  This is the object returned from the authorize function in the credentials provider. It contains the user data that we returned when authentication was successful.
  user: {
    name: 'Ahmed Abd Al-Muti',
    email: 'sayed.route12@gmail.com',
    realToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDllM2ExYjhhMjA2MmNhZmVkNWYyMCIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzc2MDIwNjQ4LCJleHAiOjE3ODM3OTY2NDh9.N1zM4K5hh60V6KDyndQsOk0C9DuP0rbFxzbpCFrPxbQ'
  },
  account: {
    providerAccountId: undefined,
    type: 'credentials',
    provider: 'credentials'
  },
  isNewUser: false,
  trigger: 'signIn'
} */
