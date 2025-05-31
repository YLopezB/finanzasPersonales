export default (error, req, res, next) => {
    if(error.status === 400) {
        return res.status(400).json({
            success: false,
            message: error,
            response: "bad request"
        })
    }
    next(error)
}