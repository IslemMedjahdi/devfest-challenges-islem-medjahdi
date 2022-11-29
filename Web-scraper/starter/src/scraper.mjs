import fetch from "node-fetch";

(async () => {
  const response = await fetch(
    "https://devfest22-recipes-heaven.gdgalgiers.com/api/recipes",
    {
      headers: {
        authorization: "Basic Z2RnX2FsZ2llcnM6ZGV2ZmVzdDIwMjI=",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  console.log("I'm scraping information for you lazy stackoverflow-er ...");
})();
