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
    console.info(`${req.method} note additon request`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

app.post('/api/notes', (req, res)=>{
    console.log(`${req.method} saving note`)
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
          title,
          text,
        };
        readAndAppend(newNote, './db/db.json');
        res.json('Note added');
    } else{
        res.error ('error in note addtion')
    }


fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(parseNote), "utf-8");
  res.json();
  console.log(`${req.method} request received to save a note`);
});

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'Develop/public/index.html'))
);

app.listen(PORT, () => console.log(`Listening on PORT: PORT`));