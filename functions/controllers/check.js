var respons = [
  {
    id: 1,
    icon: "far fa-newspaper",
    title: "Foss Blog",
    status: "Active",
    downTime: "1 Day ago",
    lastUpdate: "2021/02/01",
    path: "/blog",
  },
  {
    id: 2,
    icon: "far fa-comment-dots",
    title: "Foss Forum",
    status: "Active",
    downTime: "1 Day ago",
    lastUpdate: "2021/02/01",
    path: "/forum",
  },
  {
    id: 3,
    icon: "far fa-envelope",
    title: "Mail Server",
    status: "Active",
    downTime: "1 Day ago",
    lastUpdate: "2021/02/01",
    path: "/mailserver",
  },
  {
    id: 4,
    icon: "far fa-window-restore",
    title: "KetchUp AddOn",
    status: "Inactive",
    downTime: "1 Day ago",
    lastUpdate: "2021/02/01",
    path: "/ketchup",
  },
  {
    id: 5,
    icon: "far fa-calendar-alt",
    title: "Event 404",
    status: "Active",
    downTime: "1 Day ago",
    lastUpdate: "2021/02/01",
    path: "/event404",
  },
  {
    id: 6,
    icon: "far fa-window-restore",
    title: "RSVP App",
    status: "Inactive",
    downTime: "1 Day ago",
    lastUpdate: "2021/02/01",
    path: "/rsvp",
  },
];

exports.check = async (reqq, resp) => {

  const statusCheck = new Promise((resolve, reject) => {

    const https = require("https");
  
    const options = {
      hostname: "fossnsbm.org",
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
    });
  
    req.end();
  });
  
  const statusCheck2 = new Promise((resolve, reject) => {
  
    const https = require("https");
  
    const options = {
      hostname: "forum.fossnsbm.org",
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
    });
  
    req.end();
  });

  statusCheck.then(result => {
    // respons[0].status = result;
    // resp.send(respons);
    console.log(result);
  })

  statusCheck2.then(result => {
    // respons[1].status = result;
    console.log(result);
  })

  await Promise.all([statusCheck, statusCheck2]).then(result => {
    respons[0].status = result[0];
    respons[1].status = result[1];
  })
  resp.send(respons);
  // resp.send("Hello World");
};

