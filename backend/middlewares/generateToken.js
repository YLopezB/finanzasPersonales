import jwt from "jsonwebtoken"

export default (req, res, next) => {
    let token = jwt.sign({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        photo: req.body.password
    },
    process.env.ENCRYPTION,
    {expiresIn: "15m"}
    )
    req.token = token
    next()
}