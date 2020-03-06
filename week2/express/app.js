let express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
book =[
]

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
// 7.GET /checkEvenNumber/3
// 8. Return the Bad input (400) response code if the input number is not even. (in this case, it is 3) thus it is return 400 response code.
// 9. Return the Success (200) response code if the input number is a even.

app.get('/checkEvenNumber/:a',(req,res)=>{
  var a =  parseInt(req.params.a)
  res.send((a%2)!=1 ?'Bad input (400)':'Success (200)')
})
// 10. POST /number/1 for saving a input number, return the all saved numbers as a JSON array. For example
// 11. POST /number/1 -> [1]
// 12. POST /number/2 -> [1,2]
// 13. POST /number/5 -> [1,2,5]
const  books  =[]
app.post('/post/number/:a',(req,res)=>{

  books.push(req.params.a)
  res.status(201).json(books)

})



// 14. DELETE /number/1, remove the number in the array
// 15. DELETE /number/1 -> [2,5]
// 16. DELETE /number/2 → [5]

app.delete('/delete/number/:a',(req,res)=>{

   let a = parseInt(req.params.a) 
   books.splice(a, 1)
  res.status(201).json(books)

})

// 17. PUT /number/5/10, change the number in the array
// 18. PUT /number/5/10 -> [10]


app.put('/update/number/:a',(req,res)=>{

  let a = parseInt(req.params.a) 
  books[a]=a
 res.status(201).json(books)

})

// 19. POST /countFields for counting the number of fields that submit via req.body (raw as the JSON object) for example,
// 20. POST /countFields BODY {“a”:1,”b”:2,”c”:3} -> 3
// 21. POST /countFields BODY {“a”:1,”b”:2,”c”:3,”d”:5} -> 4

app.post('/countFields',(req,res)=>{

  res.send( books.length)

})