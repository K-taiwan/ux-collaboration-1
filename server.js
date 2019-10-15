//---------------------- SETUP ------------------------------//
const express = require('express');
const bodyparser = require('body-parser');

// Server App 
const app = express();


// Server PORT
const PORT = process.env.PORT || 3000;

const db = require('./models');

//------------------------- MiddleWare --------------------------------------//

//Server Static  Asset to 
app.use(express.static(`${__dirname}/public`));

// Body Parser
app.use(bodyParser.url({ extended: true }));
app.use(bodyParser.json());

//------------------------------------ app routes------------------------------//
//GET Home route(root)
app.get('/', (req, res) => {
  res.sendFile('views/index.html', {
    root: __dirname, 
  });
});

// events
app.get('/events', (req, res) => {
  res.sendFile('views/events.html', {
    root: __dirname, 
  });
});

// P Gallery
app.get('/photo-gallery', (req, res) => {
  res.sendFile('views/photo-gallery.html', {
    root: __dirname, 
  });
});

// V  Gallery 
app.get('/video-gallery', (req, res) => {
  res.sendFile('views/v-gallery.html', {
    root: __dirname, 
  });
});


//------------------------------------  Start server ----------------------------//
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));