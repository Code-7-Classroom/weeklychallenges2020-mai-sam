let express = require('express')
let app = express()
let data = 
app.get('/test', function(req,res){
    res.send("hello world")
})
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})

app.get('/students', (req,res) => {

    if(!data){
        res.status(404).send(`Could not find students`)
    }

    res.send(data)
})

app.get('/students/:id', function (req,res){

    const sData = data.students.find(function(student){
        console.log(student.id)

        return parseInt(req.params.id) === student.id
    })

    if(!data){
        res.status (404).send(`Couldnt find the student ID`)
    }

    res.send(data)
})