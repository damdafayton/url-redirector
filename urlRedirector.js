const fs = require("fs");

const DATABASE_FILENAME = "redirectDatabase.json";

const data = require(`./${DATABASE_FILENAME}`);

console.log({ location });

const url = new URL(location);

const parsedPath = url.pathname.split("/");
const [project, user] = parsedPath;

if (!project || !user) return;

const redirectUrl = url.searchParams.get("redirectUrl");

console.log({ project, user, redirectUrl });

if (redirectUrl) {
  data[project][user] = redirectUrl;

  fs.writeFileSync(DATABASE_FILENAME, JSON.stringify(data));
  return;
}

const redirectPath = url.searchParams.get("redirectPath");

if (redirectPath) {
  const redirectUrl = data[project][user];
  window.location = redirectUrl + redirectPath;
}