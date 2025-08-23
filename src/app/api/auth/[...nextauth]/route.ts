import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        {
            id: 'google',
            name: 'Google',
            type: 'oauth',
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }
    ]
})

export { handler as GET, handler as POST }