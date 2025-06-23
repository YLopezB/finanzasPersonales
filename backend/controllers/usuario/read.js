import Usuario from "../../models/Usuario.js";

let allUsers = async (req, res, next) => {
  try {
    let { id, name, lastName, email, role, active, online } = req.query;
    let query = {};
    if (id) query._id = id;
    if (name) query.name = { $regex: name, $options: "i" };
    if (lastName) query.lastName = { $regex: lastName, $options: "i" };
    if (email) query.email = { $regex: "^" + email, $options: "i" };
    if (role) query.role = role;
    if (active) query.active = active;
    if (online) query.online = online;
    let all = await Usuario.find(query);
    return res.status(200).json({
      response: all,
    });
  } catch (error) {
    next(error);
  }
};

let validateToken = async (req, res, next) => {
  try {
    return res.status(200).json({
      response: {
        name: req.user.name,
        lastName: req.user.lastName,
        email: req.user.email,
        photo: req.user.photo,
        role: req.user.role,
        active: req.user.active,
        online: req.user.online,
        home: req.user.home      
      },
    });
  } catch (error) {
    next(error);
  }
};

export { allUsers, validateToken };
