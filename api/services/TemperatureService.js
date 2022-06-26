const SUPPORTED_UNITS = {
  CELSIUS: "Celsius",
  FAHRENHEIT: "Fahrenheit",
};

const isUnitSupported = (unit) => {
  for (let supported of Object.keys(SUPPORTED_UNITS)) {
    if (unit.toUpperCase() === SUPPORTED_UNITS[supported].toUpperCase())
      return true;
  }
  return false;
};

const validate = (value, unit) => {
  let errorMessages = [];

  if (value === undefined || value === null)
    errorMessages.push("value is required");
  else if (typeof value !== "number")
    errorMessages.push("value must be a number");
  else if (unit === undefined || unit === null)
    errorMessages.push("convert_to is required");
  else if (!isUnitSupported(unit))
    errorMessages.push(
      `convert_to must be one of [${Object.entries(SUPPORTED_UNITS).map(
        (unit) => unit[1]
      )}]`
    );

  if (errorMessages.length === 0) return { valid: true, errorMessages };
  else return { valid: false, errorMessages };
};

const convertToCelsius = (value) => parseFloat((value * 1.8 + 32).toFixed(2));

const convertToFahrenheight = (value) =>
  parseFloat(((value - 32) / 1.8).toFixed(2));

export { convertToCelsius, convertToFahrenheight, validate, SUPPORTED_UNITS };
