const connectToMongo=require('./database/db');
const express = require('express')

connectToMongo();



const app = express()
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
const port = 5000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))



app.listen(port, () => {
  console.log(`Netflix app running on port ${port}`)
})

