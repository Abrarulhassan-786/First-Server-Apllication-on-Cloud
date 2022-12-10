console.log("Hello World I am here");

// import express from 'express';
// const app = express();
// const port = 3000

// app.get('./',(req,res) => {
//     console.log("request ip: ", req.ip);
//     res.send("Hello World Abrar is here", new Date().toString());
// })
// app.listen(port,()=>{
//     console.log('Example app listen on port ',port)
// })



// import express from 'express';
// const app = express();
// const port = 4000;

// app.get('/', (req, res) => {
//     console.log("Requested Ip: ",req.ip)
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    console.log("requested IP ",req.ip);
    res.send("Hello World");
})
app.listen(port,()=>{
    console.log('Example App listening on port ${port}')
})