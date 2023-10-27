const request = require('supertest')
const server = require('../server')

describe("GET /drivers", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(server).get("/drivers").send()
    expect(response.statusCode).toBe(200)
  });
  test("should respond with an object", async () => {
    const response = await request(server).get("/drivers").send()
    expect(response.body).toBeInstanceOf(Object)
  })
})

describe("GET /driver/:id", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(server).get(`/driver/${3}`)
    expect(response.statusCode).toBe(200)
  });
  test("should respond with an object", async () => {
    const response = await request(server).get(`/driver/${3}`)
    expect(response.body).toBeInstanceOf(Object)
  })
})

describe("GET /driver/", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(server).get(`/driver/?name=hamilton`);
    expect(response.statusCode).toBe(200);
  });
  test("should respond with an object", async () => {
    const response = await request(server).get(`/driver/?name=hamilton`);
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("POST /driver", () => {
  test("should respond with a 201 status code", async () => {
    const newDriver = {
      forename: "ricardito",
      surname: "jimenez",
      description: "soy yo",
      image: "url.image",
      nationality: "colombiano",
      dob: "1996-11-11",
      teams: ["McLaren"]
    }
    const response = await request(server).post("/driver").send(newDriver)
      .set('Accept', 'application/json');
    expect(response.statusCode).toBe(201)
  })
})
