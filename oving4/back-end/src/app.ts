import fs from 'fs'
import express, { Request, Response } from 'express';


const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())

const port = 3000;



app.get("/submissions", (req: Request, res: Response) => {
  console.log("Sent");
});

app.post('/submissions', (req: Request, res: Response) => {

  const submission = req.body;
  fs.writeFile('data/submissions.json',JSON.stringify(submission), (err)=>{
    if(err){
      console.log(err);
      res.status(500).json({message: 'Error'})
    } else {
      res.json({message: 'Success'})
    }
  })
})


app.listen(port, () =>{
  console.log(`Server running on port ${port}`);
  
})
