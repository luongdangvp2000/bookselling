import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app= express();

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

});

app.listen(5000, ()=>{
    console.log('Serve at http://localhost:5000');
});


