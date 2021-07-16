var respons = {
    id: 1,
    icon: "far fa-newspaper",
    title: "Foss Blog",
    status: "Active",
    downTime: "1 Day ago",
    lastUpdate: "2021/02/01",
    path: "/blog",
  };
  
  exports.checkfossBlog = async (reqq, resp, next) => {
    const statusCheck = (url) => {
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
  
    await statusCheck("fossnsbm.org").then((result) => {
      respons.status = result;
    });
  
    if (reqq.timedout) {
      next();
    } else {
      resp.json({ statusData: respons });
    }
  };
  