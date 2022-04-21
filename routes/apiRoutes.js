const router = require('express').Router();
const data = require('../Develop/db/db.json');
const fs = require('fs')
const exportData = (data) => {
    fs.writeFileSync("../Develop/db/db.json", JSON.stringify(data))
}
router.get("/api/notes", (req,res) => {
    res.json(data)
})

router.post("/api/notes", (req,res) => {

    data.push(req.body)
    console.log(req.body)
    res.json("Note added.")
    exportData(data);
})

module.exports = router