//---------------------- SETUP ------------------------------//
const express = require('express');
const bodyParser = require('body-parser');

// Server App 
const app = express();


// Server PORT
const PORT = process.env.PORT || 3000;

const db = require('./models');
console.log(db);

//------------------------- MiddleWare --------------------------------------//

//Server Static  Asset to 
app.use(express.static(`${__dirname}/public`));

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//------------------------------------ app routes------------------------------//
// -------------- VIEW ROUTES
//GET Home route(root)
app.get('/', (req, res) => {
  res.sendFile('views/index.html', {
    root: __dirname, 
  });
});

// Dashboard with placeholder for now
app.get('/dashboard', (req, res) => {
  res.sendFile('views/dashboard.html', {
    root: __dirname,
  });
});

app.get('/new-user', (req, res) => {
  res.sendFile('views/new-user.html', {
    root: __dirname, 
  });
});

// CREATE ROUTE
app.post('/api/v1/subscribers', (req, res) => {
  db.Subscriber.create(req.body, (err, newSubscriber) => {
    if (err) return console.log(err);

    res.json({
      status: 201,
      count: 1,
      data: newSubscriber,
      dateRequested: new Date().toLocaleString()
    })
  })
});

// SHOW ROUTE
app.get('/api/v1/subscribers', (req, res) => {
  db.Subscriber.find({}, (err, newSubscriber) => {
    if (err) return console.log(err);

    res.json({
      status: 200,
      count: newSubscriber.length,
      data: newSubscriber,
      dateRequested: new Date().toLocaleString()
    })
  })
});


app.get('/api/v1/subscribers/:id', (req, res) => {
  db.Subscriber.findById(req.params.id, (err, newSubscriber) => {
    if (err) return console.log(err);

    res.json({
      status: 200,
      count: 1,
      data: newSubscriber,
      dateRequested: new Date().toLocaleString()
    })
  })
});

// DELETE ROUTE
app.delete('/api/v1/subscribers', (req, res) => {
  db.Subscriber.deleteMany({}, (err, deletedSubscribers) => {
    if (err) return console.log(err);

    res.json({
      status: 200,
      count: deletedSubscribers.length,
      data: deletedSubscribers,
      dateRequested: new Date().toLocaleString()
    })
  })
});

// // events
// app.get('/events', (req, res) => {
//   res.sendFile('views/events.html', {
//     root: __dirname, 
//   });
// });

// // P Gallery
// app.get('/photo-gallery', (req, res) => {
//   res.sendFile('views/photo-gallery.html', {
//     root: __dirname, 
//   });
// });

// // V  Gallery 
// app.get('/video-gallery', (req, res) => {
//   res.sendFile('views/v-gallery.html', {
//     root: __dirname, 
//   });
// });


//------------------------------------  Start server ----------------------------//
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));