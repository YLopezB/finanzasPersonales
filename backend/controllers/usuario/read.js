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
        name: req.usuario.name,
        lastName: req.usuario.lastName,
        email: req.usuario.email,
        photo: req.usuario.photo,
        role: req.usuario.role,
        active: req.usuario.active,
        online: req.usuario.online      },
    });
  } catch (error) {
    next(error);
  }
};

export { allUsers, validateToken };
