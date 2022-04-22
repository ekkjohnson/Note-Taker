const path = require('path')
const fs = require('fs');
const express = require('express');


// const apiRoutes = require('./routes/apiRoutes');
// const noteRoutes = require('./routes/noteRoute');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use("/", apiRoutes)
// app.use("/", noteRoutes)


app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname,'/public/notes.html'))
});

app.get('/api/notes', (req, res)=>{
    const getNote = fs.readFileSync(path.join(__dirname, '/db/db.json'), "utf-8");
  const jsonparseNote = JSON.parse(getNote);
  res.json(jsonparseNote)
    console.info(`${req.method} note additon request`);
 
});

app.post('/api/notes', (req, res)=>{
    const saveNote = fs.readFileSync(path.join(__dirname, '/db/db.json'), "utf-8");
  const parseNote = JSON.parse(saveNote);
 let savedNote=req.body;
  parseNote.push(savedNote)

fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(parseNote), "utf-8");
  res.json();
  console.log(`${req.method} request received to save your note`);
});

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => console.log(`Listening on PORT: PORT`));