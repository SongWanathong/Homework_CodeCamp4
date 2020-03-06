let express = require('express')
const app = express()
const bodyparser = require('body-parser')

// 1.GET /static -> return “Hello World”

app.get('/static',(req,res)=>{

    res.send('Hello world')

})


// 2.GET /staticJSON -> return JSON of {text:”Hello World”}


app.get('/staticJSON',(req,res)=>{
    let data = {text:'hello World' }
    res.send(data)
})
app.listen(3000)


//3.GET /echo?text=Heyyyy -> return any string in text variable, i.e., “Heyyyy”

app.get('/echo',(req,res)=>{

  res.send(req.query.text)

})

//4. GET /plus?a=3&b=5 -> return the sum of a + b, i.e., 8


app.get('/plus',(req,res)=>{

    var a =  parseInt(req.query.a)
    var b =  parseInt(req.query.b)
    res.send(String(a+b))
  
  })





// 5.GET /plusByJSON?jsonText={"a":3,"b":5} -> return the sum of a+b, parsed the json object from jsonText variable, thus, it should be answer 8

app.get('/plusByJSON',(req,res)=>{

    var a =  parseInt(req.query.json.a)
    var b =  parseInt(req.query.json.b)
    res.send(String(a+b))
  
  })

// app.get('/plusByJSON/:jsonText',(req,res)=>{
//      a =  req.params.jsonText
//      b= JSON.parse(a)
    
//      res.send(String(b.a+b.b))
// })
// app.listen(3001)

//6. GET /plus/6/7 -> return the sum of 6+7, which is 13

app.get('/plus/:a/:b',(req,res)=>{
    var a =  parseInt(req.params.a)
    var b =  parseInt(req.params.b)
    res.send(String(a+b))
})
// GET /checkEvenNumber/3
