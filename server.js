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

const express = require('express');
const path = require('path');
const fs = require("fs"); 
const app = express();

const PORT = process.env.PORT || 3000;
const indexPath  = path.resolve(__dirname, './build', 'index.html');

// here we serve the index.html page
app.get('/', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        // get post info

        // inject meta tags
        htmlData = htmlData.replace(
            "<title>React App</title>",
            `<title>title-abc1</title>`
        )
        .replace(/__META_OG_TITLE__/g, "title-test")
        .replace(/__META_OG_DESCRIPTION__/g, "description-test")
        .replace(/__META_DESCRIPTION__/g, "description-test")
        .replace(/__META_OG_IMAGE__/g, "https://www.w3schools.com/w3css/img_lights.jpg")

        console.log(htmlData, "dtat");
        return res.send(htmlData);
    });
});
// static resources should just be served as they are
app.use(express.static(
  path.resolve(__dirname, './build'),
  { maxAge: '30d' },
));
// listening...
app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error during app startup', error);
    }
    console.log("listening on " + PORT + "...");
});