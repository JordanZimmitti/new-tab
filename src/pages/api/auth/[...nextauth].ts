import {NextApiRequest}            from 'next'
import {NextApiResponse}           from 'next'
import NextAuth, {NextAuthOptions} from 'next-auth'
import Providers                   from 'next-auth/providers'

const {Email} = Providers

const options: NextAuthOptions = {
    providers: [
        Email({
            server: {
                host: process.env.EMAIL_SERVER_HOST!,
                port: Number(process.env.EMAIL_SERVER_PORT!),
                auth: {
                    user: process.env.EMAIL_SERVER_USER!,
                    pass: process.env.EMAIL_SERVER_PASSWORD!,
                }
            },
            from: process.env.EMAIL_SERVER_FROM
        })
    ],
    database: process.env.DATABASE_URL
}

export default (request: NextApiRequest, response: NextApiResponse) => NextAuth(request, response, options)