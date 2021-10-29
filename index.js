const express = require('express');
const PORT = process.env.PORT || 8000;
const app =express();
app.use(express.json());

app.listen(PORT,()=> {
    console.log('server started');
});
app.get('/',(req,res) => {
  res.send('hi');
});

app.post('/',(req,res) => {
    console.log(req.body);
    res.status(200).send('Image Received');
});

