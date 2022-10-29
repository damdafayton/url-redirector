var express = require("express");
var app = express();

const port = process.env.PORT || 3020;

const { urlRedirector } = require("./urlRedirector");

app.get("/*", (req, res) => {
  // console.log(req);
  const { host } = req.headers;
  const path = req.url;

  const processUrl = urlRedirector("https://" + host + path);
  console.log({ processUrl });
  if (processUrl === true) {
    return res.sendStatus(200);
  }

  if (typeof processUrl === "string") {
    return res.redirect(302, processUrl);
  }

  if (typeof processUrl === "object") {
    res.send(404, processUrl);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
