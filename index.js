import express from "express";
import { connectToMongo, getAllUsers, addVisitedHome, addVisitedDetails } from "./mongoUtils.js";

const app = express();
const port = 3000;

connectToMongo();

app.get("/", (req, res) => {
  res.send("Welcome to makima mongo api");
});

app.get("/seeData/:visited", async (req, res) => {
  try {
    const users = await getAllUsers(req.params.visited);
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
  }
});

app.get("/check/:value", async (req, res) => {
  res.send(`${req.params.value}`);
});

app.get("/addHome/:model/:ip/", async(req,res) => {
    try{
        const response = await addVisitedHome(req.params.model, req.params.ip);
        res.json({response})
    }catch(err){
        console.error("Error inserting user:", err);
    }
})

app.get("/addDetails/:model/:ip/:animeId", async(req,res) => {
    try{
        const response = await addVisitedDetails(req.params.model, req.params.ip, req.params.animeId);
        res.json({response})
    }catch(err){
        console.error("Error inserting user:", err);
    }
})

app.get("/addPlayer/:model/:ip/:animeId/:episodeId", async(req,res) => {
    try{
        const response = await addVisitedDetails(req.params.model, req.params.ip, req.params.animeId, req.params.episodeId);
        res.json({response})
    }catch(err){
        console.error("Error inserting user:", err);
    }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
