const crypto = require("crypto");
function generateUniqueId() {
  return crypto.randomBytes(4).toString("HEX"); // ID gerado randomicamente
}

module.exports = generateUniqueId;
