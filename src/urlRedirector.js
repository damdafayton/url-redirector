const fs = require("fs");

const DATABASE_FILENAME = "redirectDatabase.json";
const data = require(`./${DATABASE_FILENAME}`);

module.exports.urlRedirector = (location) => {
  console.log("redirect script loaded");

  console.log({ location });

  const url = new URL(location);

  const parsedPath = url.pathname.slice(1).split("/");

  const [project, user] = parsedPath;

  if (!project || !user) return { message: "Wrong path." };

  const redirectUrl = url.searchParams.get("redirectUrl");

  console.log({ project, user, redirectUrl });

  if (redirectUrl) {
    data[project] = data[project] || {};

    data[project][user] = redirectUrl;

    fs.writeFileSync(DATABASE_FILENAME, JSON.stringify(data));

    console.log(
      `Calls to /${project}/${user}?redirectPath=/example-path will be redirected to ${redirectUrl}/example-path`
    );

    return true;
  }

  const redirectPath = url.searchParams.get("redirectPath");

  if (redirectPath) {
    const redirectUrl = data[project][user];

    // Can not delete because of hmac verification on shopify
    // url.searchParams.delete("redirectPath");

    return redirectUrl + redirectPath + url.search;
  }

  return { message: "Wrong query parameter." };
};
