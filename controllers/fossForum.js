const statusCheck = require('../middleware/CheckStatus');

var respons = {
  id: 2,
  icon: "far fa-comment-dots",
  title: "Foss Forum",
  status: "Active",
  downTime: "1 Day ago",
  lastUpdate: "2021/02/01",
  path: "/forum",
};

exports.checkForum = async (reqq, resp, next) => {


  await statusCheck.statusCheck("forum.fossnsbm.org").then((result) => {
    respons.status = result;
  });

  if (reqq.timedout) {
    next();
  } else {
    resp.json({ statusData: respons });
  }
};
