'use strict';
const {
  browserObject, scraperController
} = require('./index')

module.exports.hello = async (event, context) => {
  try {
    let browserInstance = browserObject.startBrowser();
    scraperController(browserInstance);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `${browserInstance}`
      })
    }
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Error: ${e.message}`,
        score: e.score
      })
    }
  }
};
