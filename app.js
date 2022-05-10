const express=require("express")
const app =express()
const fetch = require('node-fetch')

const port = process.env.PORT || 8000

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/", async (req,res)=>{
  const response = await fetch("https://api.wazirx.com/api/v2/tickers")
  const data = await response.json();
  const keys = Object.keys(data);
  res.render("body",{data:data,keys:keys})
})


app.listen(port, function() {
  console.log("Server is running");
});
