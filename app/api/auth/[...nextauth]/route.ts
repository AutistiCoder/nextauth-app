import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";

const connectionPool = new Pool({
  connectionString:process.env.DATABASE_URL
});

const neonAdapter  = NeonAdapter(connectionPool);
const authOptions = {
  adapter: neonAdapter,
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM
    })
  ],
}

const handler = NextAuth(authOptions);
// "handler" should handle both GET and POST so we export as both
export {handler as GET, handler as POST};