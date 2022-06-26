# Temperature conversion API

**Technology Used**

- Javascript ES6
- Node.JS
- Express.JS
- Jest

**Reason behind choosing the technology**

- Javascript was my choice of language and Node.JS is the de-facto runtime for that.
  _Note: I would like to use TypeScript in actual production environment for better type safety._
- Node.JS has several frameworks to develop REST API's but among them I choose Express.JS as it is the most lightweight, has low to no configuration required, fast to implement etc benefits.
- I choose Jest and Supertest to write Unit tests for the API also as I have previous experience with those. Since the'll run on development environment only, they have no impact on app performance, so any library would be fine.

**How to run on Local machine**

- Local setup

  - Make sure Node.JS is installed
  - Clone or Unzip the project or repository
  - Open terminal on the project directory
  - Execute `npm install`
  - Execute `npm run start`
  - App will run on port 3000 By default. Port can be changed in `.env` file
  - If you want to make change and use auto reload, Execute `npm run nodemon`
  - Use cUrl or any tool to test. Following is a sample curl command.
    - `curl --location --request POST 'http://localhost:3000/api/v1/temperature/convert' --header 'Content-Type: application/json' --data-raw '{ "value": 100, "convert_to": "Fahrenheit" }'`

- Docker
  - Make sure Docker is installed
  - Clone or Unzip the project or repository
  - Open terminal on the project directory
  - Execute following to build the image _[It'll take some time]_
    - `docker build -t sihan/temperature_api:1.0.0 .`
  - Execute following to run the image built in previous stage
    - `docker run -e "PORT=3000" -it -p 3001:3000 --name temperature_app sihan/temperature_api:1.0.0`
  - Container app will run on PORT 3000 and it'll be exposed to host machine's 3001
  - You can change container and host port mapping during `docker run` command
  - Use cUrl or any tool to test. Following is a sample curl command.
    - `curl --location --request POST 'http://localhost:3001/api/v1/temperature/convert' --header 'Content-Type: application/json' --data-raw '{ "value": 100, "convert_to": "Fahrenheit" }'`

**How to run Unit test**

- Make sure Node.JS is installed
- Clone or Unzip the project or repository
- Open terminal on the project directory
- Execute `npm install`
- Execute `npm run test`

**API endpoints**

- **GET /api/v1/health/alive**
  _Reveals if the API is running fine or not._
  _Should get 200 with a message if everything is alright_
- **POST /api/v1/temperature/convert**
  - _Converts temperature between units_
  - _Expects request body. Format_
    `{value: number, convert_to:enum(Celsius, Fahrenheit)}`
    _Explanation:_
    **value**: must be a number. The temperature that we want to converts
    **convert_to**: must be one of (Celsius, Fahrenheit). The unit that we want to convert to\*
  - _Should get 200 with response body. Response body format_
    `{result: number, unit:enum(Celsius, Fahrenheit)}`
    _Explanation:_
    **result**: is a number. Result to converted temperature
    **convert_to**: one of (Celsius, Fahrenheit). The unit that the result is converted to\*
  - _Should get 400 with appropriate error message if request body is malformed. Example:_
    Request body: `{value: 100, convert_to:"sample"}`
    Response body: `{error_messages: ["convert_to must be one of [Celsius,Fahrenheight]"]}`

**Remote host**

- Domain: https://temp-conv.herokuapp.com
- _Health check_
  `curl --location --request GET 'https://temp-conv.herokuapp.com/api/v1/health/alive'`
- Temperature convert
  `curl --location --request POST 'https://temp-conv.herokuapp.com/api/v1/temperature/convert' --header 'Content-Type: application/json' --data-raw '{ "value": 100, "convert_to": "Fahrenheit" }'`
