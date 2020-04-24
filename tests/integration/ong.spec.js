const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");
describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback(); // zera o banco de dados antes da execução
    await connection.migrate.latest(); // cria a migration dps do teste
  });

  afterAll(async () => {
    await connection.destroy();
  });
  it("should be able to create a new ong", async () => {
    const response = await request(app).post("/ongs").send({
      name: "Fabrica de sorrisos",
      whatsapp: "99999999999",
      email: "teste@teste.com",
      city: "GAMA",
      uf: "df",
    });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
