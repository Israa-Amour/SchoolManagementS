const { response, request } = require("express");
const express = require('express');
const app = express();

app.use(express.json());//fuction that modify the data / update - added to the request object

const students =
    [
        {
            name: 'ali',
            id: 11924646
            ,
            dateofbirth: '22.1.2001',
            gpa: 3.3
        },
        {
            name: 'sami',
            id: 11923646
            ,
            dateofbirth: '22.2.2001',
            gpa: 2.2
        },
        {
            name: 'ahmad',
            id: 11914646
            ,
            dateofbirth: '22.7.2001',
            gpa: 2
        }
    ]
app.get('/studentsl', (request, response) => {
    response.status(200).json(students)
})
app.listen(1001, () => {
    console.log('app is listiing localost:1001 ');
})
app.post('/studentsl', (request, response) => {
    console.log('post request received ');
    console.log('request is : ' + request.body.name);
    console.log('request is : ' + request.body.dateofbirth);
    console.log('request is : ' + request.body.gpa);

    const newId = students[students.length - 1].id + 1;
    const newStudent = Object.assign({
        id: newId, name: request.body.name,
        dateofbirth: request.body.dateofbirth, gpa: request.body.gpa
    });

    students.push(newStudent);
    response.status(201).json(newStudent);
    // response.send('Done');

})