const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  },

  async create(req, res) {
    const { name, whatsapp, email, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString("HEX"); // ID gerado randomicamente

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      uf,
      city,
    });

    return res.json({
      id,
    });
  },
};
