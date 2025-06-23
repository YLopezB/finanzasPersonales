import passport from "passport"
import { Strategy, ExtractJwt } from "passport-jwt"
import Usuario from "../models/Usuario.js"

export default passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.ENCRYPTION
        },
        async (jwt_payload, done) => {
            try {
                let usuario = await Usuario.findOne({ email: jwt_payload.email, online: true })
                if (usuario) {
                    return done(null, usuario)
                }
                return done(null, null)
            } catch (error) {
                return done(error, null)
            }
        }
    )
)