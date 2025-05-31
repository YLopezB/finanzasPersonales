export default (error, req, res, next) => {
    return res.status(500).json({
        success: false,
        message: "Error",
        response: error
    })
}