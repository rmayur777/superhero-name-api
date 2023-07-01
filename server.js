const express = require('express')
const app = express()
const PORT = 8000

const superheroes = {
'superman' : {
    'age': 32,
    'birthName':'Kal-el',
    'birthLocation':'Krypton'
},

'batman' : {
    'age': 34,
    'birthName':'Bruce Wayne',
    'birthLocation':'Gotham'
},

'unknown' : {
    'age': 0,
    'birthName':'unknown',
    'birthLocation':'unknown'
}

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || PORT,() =>{
    console.log(`Server is running on PORT ${PORT}`)
})

app.get('/api/:name', (request, response)=>{
    const superheroName = request.params.name.toLowerCase()
    if (superheroes[superheroName]){
        response.json(superheroes[superheroName])
    }else{
        response.json(superheroes['unknown'])
    }
    
})