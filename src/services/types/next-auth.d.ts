import NextAuth from "next-auth";

// Extend the default NextAuth types to include our custom properties(Module augmentation)
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
    };
    realToken?: string;
  }

  interface JWT {
    id: string;
    name: string;
    email: string;
    realToken?: string;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    realToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    realToken?: string;
  }
}