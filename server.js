const express = require('express');

const bodyParser =require('body-parser');
const knex = require('knex')

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'omega',
    database : 'Wojsko'
  }
});


db.select('*').from('jednostka')
.then(data => {
	console.log(data);
});

const app = express ();

app.get(3000, (req, res)=> {
	res.send('this is working');
});


app.listen(3000, ()=> {
	console.log('app is running on port 3000');
});



