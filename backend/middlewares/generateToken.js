import jwt from "jsonwebtoken"

export default (req, res, next) => {
    let token = jwt.sign({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        role: req.body.role,
        home: req.body.home
    },
    process.env.ENCRYPTION,
    {expiresIn: "15m"}
    )
    req.token = token
    next()
}