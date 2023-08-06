const express = require('express');
const { HomeModel, DetailsModel, PlayerModel } = require('./mongodb-utils');
const { getCurrentDateAndTime, getClientIP, getUserAgent } = require('./utils')

const app = express();
const port = 3000;

app.get('/save-data', async (req, res) => {
  try {
    const { table, id } = req.query;

    if (table == "home") {
      const newHomeData = new HomeModel({
        modelNumber: getUserAgent(req),
        dateAndTime: getCurrentDateAndTime(),
        ipAddress: getClientIP(req),
      });

      await newHomeData.save();
    } else if (table == "details" && id != null) {
      const newDetailsData = new DetailsModel({
        modelNumber: getUserAgent(req),
        dateAndTime: getCurrentDateAndTime(),
        ipAddress: getClientIP(req),
        animeID: id,
      });

      await newDetailsData.save();
    } else if (table == "player" && id != null) {
      const newPlayerData = new PlayerModel({
        modelNumber: getUserAgent(req),
        dateAndTime: getCurrentDateAndTime(),
        ipAddress: getClientIP(req),
        videoID: id,
      });

      await newPlayerData.save();
    } else {
      res.status(500).json({ message: 'Field not specified' });
    }
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'An error occurred while saving data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
