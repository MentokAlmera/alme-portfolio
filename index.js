const express = require("express")
const app = express();
const bodyParser = require("body-parser")

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

let goals = [
    { img: "diploma.png", text: "Graduate", description: "Achieve my academic goals and earn my diploma." },
    { img: "dev.png", text: "Become a Full Stack Developer", description: "Master front-end and back-end technologies to build complete applications." },
    { img: "improve.png", text: "Improve Myself", description: "Continuously grow personally and professionally to become a better version of myself." },
    { img: "lifebalance.png", text: "Work in a Healthy Environment", description: "Find a workplace that supports well-being, collaboration, and work-life balance." }
];


let comments = [
    {name: "Alme", text:"meow"},
    {name: "Alme", text:"meow"},
    {name: "Alme", text:"meow"},
    {name: "Alme", text:"meow"},
    {name: "Alme", text:"meow"}
]

let PORT = 8888;
app.listen (8888, ()=> {
    console.log(`server is running at http://localhost:${PORT}`);
});

app.get

app.get("/", (req, res) => {
    res.render("index", {pageTitle: "Home Page" });
});

app.get("/aboutMe", (req, res) => {
    res.render("aboutMe", {pageTitle: "About Alme" });
});

app.get("/interestNhobbies", (req, res) => {
    res.render("interestNhobbies", { pageTitle: "Interests & Hobbies" });
});

app.get("/project", (req, res) => {
    res.render("project", {pageTitle: "Projects"});
});

app.get ("/goals", (req, res) => {
    res.render("goals", {pageTitle: "Goals", goals});
});

app.get("/comments", (req, res) => {
    res.render("comments", { pageTitle: "Comments", comments });
});

app.post("/comments", (req, res) => {
    const newComment = {
        name: req.body.name,  
        text: req.body.text   
    };

    comments.push(newComment); 
    res.redirect("/comments"); 
});
