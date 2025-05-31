export default (req, res, next) => {
    return res.status(404).json({
        status: 404,
        success: false,
        message: `The request with method ${request.method} with path ${request.ur} was no found`
    })
}