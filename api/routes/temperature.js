import { Router } from "express";
import {
  validate,
  SUPPORTED_UNITS,
  convertToCelsius,
  convertToFahrenheight,
} from "../services/TemperatureService.js";

import {
  ConvertedResponse,
  ConversionFailedResponse,
} from "../models/TemperatureDTO.js";

const router = Router();

router.post("/convert", async (req, res) => {
  const value = req.body.value;
  const desiredUnit = req.body.convert_to;

  const validationResult = validate(value, desiredUnit);
  if (!validationResult.valid) {
    res.status(400);
    return res.json({ error_messages: validationResult.errorMessages });
  }

  switch (desiredUnit) {
    case SUPPORTED_UNITS.CELSIUS: {
      const converted = convertToCelsius(value);
      res.status(200);
      return res.json(
        new ConvertedResponse(converted, SUPPORTED_UNITS.CELSIUS)
      );
    }
    case SUPPORTED_UNITS.FAHRENHEIT: {
      const converted = convertToFahrenheight(value);
      res.status(200);
      return res.json(
        new ConvertedResponse(converted, SUPPORTED_UNITS.FAHRENHEIT)
      );
    }
    default: {
      res.status(500);
      return res.json(
        new ConversionFailedResponse("Could not convert temperature")
      );
    }
  }
});

export default router;
