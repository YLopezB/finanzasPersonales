import Hogar from "../models/Hogar.js"

export default async(req, res, next) => {
    try {
        let hogar = await Hogar.findOne({ name: req.body.home })
        if(hogar)
            req.body.home = hogar._id
        else{
            console.log(req.body.home);
            hogar = await Hogar.create({ name: req.body.home })
            req.body.home = hogar._id
        }
        next()
    } catch (error) {
        next(error)
        console.log(error);
        
    }
}