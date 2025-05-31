import bcryptjs from "bcryptjs"

export default (req, res, next) => {
    let hastPassword = bcryptjs.hashSync(req.body.password, 10)
    req.body.password = hastPassword
    next()
}