import express from 'express';
import cors from 'cors';


const app = express();
const port = 3001;
app.use(express.json())
app.use(cors())

app.post("/user", (req , res) =>{
    let newussr={
        fullname:res.body.fullname,
    }
    
})




app.listen(port, () => {
    console.log("Server is running on http://127.0.0.1:${port}");
});