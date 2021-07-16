exports.statusCheck = (url) => {
    return new Promise((resolve, reject) => {
      const https = require("https");

      const options = {
        hostname: url,
        path: "/",
        method: "GET",
      };

      const req = https.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);
        if (res.statusCode == 200) {
          resolve("Active");
        } else {
          resolve("Inactive");
        }
      });

      req.on("error", (error) => {
        console.error(error);
        // respons[id].status = "Loading";
        resolve("Inactive");
      });

      req.end();
    });
  };
