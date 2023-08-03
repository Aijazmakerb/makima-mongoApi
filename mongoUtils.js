import { MongoClient } from "mongodb";
import getCurrentDateAndTime from "./utils.js";

const databaseName = "makima"

const visitedHome = "home";
const visitedDetails = "details";
const visitedPlayer = "player";

const uri = "mongodb+srv://786aijazusmaan:Saniaz.12@cluster0.o7qx8z5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
let db;

export async function connectToMongo() {
  try {
    await client.connect();
    db = client.db(databaseName);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

function getCollection(collectionName) {
  return db.collection(collectionName);
}

export async function getAllUsers(collectionName) {
  try {
    const collection = getCollection(collectionName);

    // Fetch all documents from the collection
    const users = await collection.find({}).toArray();
    return users;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}

export async function addVisitedHome(modelNumber, ipAddress)
{
  try{
    const collection = getCollection(visitedHome);

    const currentTime = await getCurrentDateAndTime();

    const body = {
      modelNumber: modelNumber,
      dateAndTime: currentTime,
      ipAddress: ipAddress
    }

    const result = await collection.insertOne(body);
    return result.insertedId;
  }catch(error){
    console.error("Error inserting user:", err);
    throw err;
  }
}

export async function addVisitedDetails(modelNumber, ipAddress, animeId)
{
  try{
    const collection = getCollection(visitedDetails);

    const currentTime = await getCurrentDateAndTime();

    const body = {
      modelNumber: modelNumber,
      dateAndTime: currentTime,
      ipAddress: ipAddress,
      animeId: animeId
    }

    const result = await collection.insertOne(body);
    return result.insertedId;
  }catch(error){
    console.error("Error inserting user:", err);
    throw err;
  }
}

export async function addVisitedPlayer(modelNumber, ipAddress, animeId, episodeId)
{
  try{
    const collection = getCollection(visitedPlayer);

    const currentTime = await getCurrentDateAndTime();

    const body = {
      modelNumber: modelNumber,
      dateAndTime: currentTime,
      ipAddress: ipAddress,
      animeId: animeId,
      episodeId: episodeId,
    }

    const result = await collection.insertOne(body);
    return result.insertedId;
  }catch(error){
    console.error("Error inserting user:", err);
    throw err;
  }
}