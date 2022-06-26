import supertest from "supertest";
import app from "../app";

describe("POST /api/v1/temperature/convert", () => {
  describe("value not present", () => {
    test('should get 400 and "value is required"', async () => {
      await supertest(app)
        .post("/api/v1/temperature/convert")
        .send({
          convert_to: "Fahrenheit",
        })
        .expect(400, {
          error_messages: ["value is required"],
        });
    });
  });

  describe("value type not number", () => {
    test('should get 400 and "value must be a number"', async () => {
      await supertest(app)
        .post("/api/v1/temperature/convert")
        .send({
          value: "string",
          convert_to: "Fahrenheit",
        })
        .expect(400, {
          error_messages: ["value must be a number"],
        });
    });
  });

  describe("convert_to not present", () => {
    test('should get 400 and "convert_to is required"', async () => {
      await supertest(app)
        .post("/api/v1/temperature/convert")
        .send({
          value: 30,
        })
        .expect(400, {
          error_messages: ["convert_to is required"],
        });
    });
  });

  describe("convert_to is invalid", () => {
    test('should get 400 and "convert_to must be one of [Celsius,Fahrenheit]"', async () => {
      await supertest(app)
        .post("/api/v1/temperature/convert")
        .send({
          value: 30,
          convert_to: "wrong_unit",
        })
        .expect(400, {
          error_messages: ["convert_to must be one of [Celsius,Fahrenheit]"],
        });
    });
  });

  describe("convert to fahrenheight", () => {
    test("should get 200 and result -1.11 with value 30 and convert_to Fahrenheit", async () => {
      await supertest(app)
        .post("/api/v1/temperature/convert")
        .send({
          value: 30,
          convert_to: "Fahrenheit",
        })
        .expect(200, {
          result: -1.11,
          unit: "Fahrenheit",
        });
    });
  });

  describe("convert to celsius", () => {
    test("should get 200 and result 30 with value -1.11 and convert_to Celsius", async () => {
      await supertest(app)
        .post("/api/v1/temperature/convert")
        .send({
          value: -1.11,
          convert_to: "Celsius",
        })
        .expect(200, {
          result: 30,
          unit: "Celsius",
        });
    });
  });
});
