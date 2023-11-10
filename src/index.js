const express = require('express');
const app = express();
const path = require('path');  //store path.join method  => path = module , join => method inside module
const port = process.env.port || 3000 ;   // when take hosting then wsite run on port that we get from "process.env.port"  , port number store in environment var
const hbs = require("hbs");
app.set ("view engine" , "hbs");
const partialspath = path.join(__dirname , "/partials");  //in public folder index.html file bydefalt print on home page
hbs.registerPartials(partialspath);



const imgpath = path.join(__dirname ,"views/images/girl.jpg" );
// console.log (imgpath);
// app.use(express.static(imgpath));  //tell express to use static wsite(.html , img etc files)

// app.use("/static/*",express.static('images'));
// app.use("/static/images/girl.jpg" , (req,res)=>{
//     res.render(imgpath);
// })

app.get("/about" , (req,res)=>{
    // res.send(" hello about");
    res.render("about" ); //go in views folder and render "about" file
});
app.get("/" , (req,res)=>{
    res.render("index");  //show static wsite (index.html) at home and close connection and not print hello home
});
app.get("/weather" , (req,res)=>{
    res.render("weather");
});
// app.get("*" , (req,res) =>{
//     res.render("404error" , {
//         errmsg:"page not found try again"
//     });
// });

app.listen(port , ()=>{
    console.log(`listen at port no. ${port}`);
})

//call static file (index.html etc) here