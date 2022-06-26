class ConversionFailedResponse {
  constructor(error_message) {
    this.error_message = error_message;
  }
}

class ConvertedResponse {
  constructor(value, unit) {
    this.result = value;
    this.unit = unit;
  }
}

export { ConversionFailedResponse, ConvertedResponse };
