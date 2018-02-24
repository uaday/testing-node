const express= require('express');
const hbs= require('hbs');
const port=process.env.PORT||3000;

var app= express();
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
  res.send('<h1>Hello Sudipta</h1>');
});
app.post('/home',(req,res)=>{
  res.send(`${form-username}`);
});
app.get('/login',(req,res)=>{
  res.render('login.hbs',{
    title:'login-page'
  })
});
app.listen(port,()=>{
  console.log(`The app is running on ${port}`);
});
