import jwt from "jsonwebtoken"

export default (req, res, next) => {
    let token = jwt.sign({
        name: req.body.name,
        email: req.body.email,
        photo: req.body.password,
        role: 0
    },
    process.env.ENCRYPTION,
    {expiresIn: "15m"}
    )
    req.token = token
    next()
}