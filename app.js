const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


// DB Config
require('./config/db');

const app = express();

const poll = require('./routes/poll');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS
app.use(cors());

app.use('/poll', poll);

const port = 3000;

// Start server
app.listen( process.env.PORT || port, () => console.log(`Server started on port ${port}`));

// add these lines only if using Angular / Vue for front-end. 

// run command 'npm run build' and point to build directory in root.  

// if(process.env.NODE_ENV === 'production') {
  
//   app.use(express.static(__dirname + "/dist/"));
//   app.get("*", (req, res) => {
//     res.sendFile(__dirname + "/dist/index/html")
//   })
  
// }
