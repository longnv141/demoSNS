// const express = require("express");
// const path = require("path");
// const fs = require("fs");

// const PORT = 5050;

// const app = express();

// app.get("/", (req, res) => {
//   const filePath = path.resolve(__dirname, "./build", "index.html");
//   console.log(__dirname, "__dirname");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     }

//     data = data
//       .replace(/\$_TITLE/g, "Home")
//       .replace(/\$_DESCRIPTION/g, "GUNER IS THE BEST.")

//     res.send(data)
//   });
// });

// app.get("/about", (req, res) => {
//   const filePath = path.resolve(__dirname, "./build", "index.html");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     }

//     data = data
//       .replace(/\$_TITLE/g, "About Page")
//       .replace(/\$_DESCRIPTION/g, "About page description.");

//     res.send(data)
//   });
// });

// app.use(express.static(path.resolve(__dirname, "./build")))

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`)
// })

const path = require("path")
const express = require("express")
const app = express()
const fs = require("fs")
//
const pathToIndex = path.join(__dirname, "build/index.html")
app.get("/", (req, res) => {
  const raw = fs.readFileSync(pathToIndex)
  const pageTitle = "Homepage - Welcome to my page"
  const updated = raw.replace("__PAGE_META__", `<title>${pageTitle}</title>`)
  res.send(updated)
})
//
app.use(express.static(path.join(__dirname, "build")))
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "build/index.html"))
)
const port = process.env.PORT || 5500
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})