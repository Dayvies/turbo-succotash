const http = require ('http')

const server = http.createServer((req,res)=>{
 if (req.url=='/')
 {
   res.end('Welcome to our homepage');

 }
  else if(req.url=='/about')
{
  res.end('This is the about page');

}
else
{
  res.end(
    `<h1>Oops! </h1>
    <p> We cant find the page that you're looking for </p>
    <a href="/">back home</a>`
  );

}

})
server.listen(5000)
