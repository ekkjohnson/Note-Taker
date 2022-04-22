const express = require('express');
const path = require('path')
const fs = require('fs');

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
    res.sendFile(path.join(__dirname,'Develop/public/notes.html'))
});

app.get('/api/notes', (req, res)=>{
    const grabNote = fs.readFileSync(path.join(__dirname, './Develop/db/db.json'), "utf-8");
  const jsonparseNote = JSON.parse(grabNote);
  res.json(jsonparseNote)
    console.info(`${req.method} note additon request`);
 
});

app.post('/api/notes', (req, res)=>{
    const storeNote = fs.readFileSync(path.join(__dirname, '/db/db.json'), "utf-8");
  const jsonparseNote = JSON.parse(storeNote);
 let savedNote=req.body;
  parseNote.push(savedNote)

fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(jsonparseNote), "utf-8");
  res.json();
  console.log(`${req.method} request received to save your note`);
});

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'Develop/public/index.html'))
);

app.listen(PORT, () => console.log(`Listening on PORT: PORT`));