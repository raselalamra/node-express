const express = require('express');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());

const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('wow, im learning  node');
});

const users = [
    { id: 1, name: "Malu", email: "malu@gmail.com", phone: "0174555446" },
    { id: 2, name: "kalu", email: "kalu@gmail.com", phone: "01745245446" },
    { id: 3, name: "lulu", email: "lulu@gmail.com", phone: "0175465446" },
    { id: 4, name: "sulu", email: "sulu@gmail.com", phone: "017455454446" },
    { id: 5, name: "bulu", email: "bulu@gmail.com", phone: "017455526" },
    { id: 6, name: "jabbar", email: "jabbar@gmail.com", phone: "0194525446" },
    { id: 7, name: "kalachan", email: "kalachan@gmail.com", phone: "0184555446" },
    { id: 8, name: "lalchan", email: "lalchan@gmail.com", phone: "0134555446" },
    { id: 9, name: "miaji", email: "miaji@gmail.com", phone: "0144555446" },
    { id: 10, name: "kallu", email: "kallu@gmail.com", phone: "0195555446" },
    { id: 11, name: "jhankar", email: "jhankar@gmail.com", phone: "01852555446" }
];

app.get('/users', (req, res) =>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
})



app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/users/:id', (req, res) =>{
   const id = req.params.id;
   const user = users[id];
   res.send(user) 
})

app.listen(port, () => {
    console.log('Listening to port', port);
});