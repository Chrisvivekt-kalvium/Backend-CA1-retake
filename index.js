const expess = require("express")
const app = expess()
const PORT = 3000

app.use = expess.json

app.get('/',(req,res) => {
    res.status(200).json("Welcome")
})

app.post('/login',(req,res) => {
    const {email,password} = req.body
    if(!email){
        return res.status(400).json({message:"Email cannot be empty"})
    }
    if(!password){
        return res.status(400).json({message:"Password cannot be empty"})
    }
    res.send("login completed")
})




app.listen(PORT,()=> {
    console.log(`server is running on http://localhost:${PORT}`)
})