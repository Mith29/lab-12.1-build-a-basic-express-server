import express from "express";
import path from "path";

const app = express();
const port = 3000;
const __dirname = import.meta.dirname;

app.use(express.static(path.join(__dirname, "public")));

// app.get('/', (req,res)=>{
//         console.log(req.url)

//     res.sendFile(path.join(__dirname,'public/index.html'))
// })

app.get("/contact", (req, res) => {
  console.log(req.url);

  res.sendFile(path.join(__dirname, "public/contact.html"));
});

app.get("/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "public/menu.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
