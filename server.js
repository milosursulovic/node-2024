import http from "http";

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Homepage!</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About!</h1>");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Not found!</h1>");
      }
    } else {
      throw new Error("Method is not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end(`<h1>Server error! ${error.message}</h1>`);
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
