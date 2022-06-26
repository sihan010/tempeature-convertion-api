import supertest from "supertest";
import app from "../app";

describe("GET /api/v1/health/alive", () => {
  describe("should be alive", () => {
    test('should get 200 and "App is alive and ready to go !" when api is started', async () => {
      await supertest(app).get("/api/v1/health/alive").expect(200, {
        message: "App is alive and ready to go !",
      });
    });
  });
});
