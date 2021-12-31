const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello', (req, res) => {
  res.send({message: 'Hello Express!'});
});

app.get('/api/customers', (req, res) => {
  res.send([
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': '홍길동',
      'birthday': '123456',
      'gender': 'man',
      'job': 'student'
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/64/64/2',
      'name': '홍길동2',
      'birthday': '123456',
      'gender': 'man',
      'job': 'design'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '홍길동3',
      'birthday': '123456',
      'gender': 'man',
      'job': 'programer'
    }   
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));