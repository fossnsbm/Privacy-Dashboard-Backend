const statusCheck = require('../middleware/CheckStatus');

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
    
  
    await statusCheck.statusCheck("fossnsbm.org").then((result) => {
      respons.status = result;
    });
  
    if (reqq.timedout) {
      next();
    } else {
      resp.json({ statusData: respons });
    }
  };
  