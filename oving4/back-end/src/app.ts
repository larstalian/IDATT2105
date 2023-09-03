import fs from 'fs'
import express, { Request, Response } from 'express';


const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())

const port = 3000;

app.post('/submissions', (req: Request, res: Response) => {

  const submission = req.body;
  fs.readFile('data/submissions.json', 'utf8', (err, data) => {
      if (err) {
          console.log(err);
          res.status(500).json({ message: 'Error' });
          return;
      }
  
      let submissions;
      try {
          submissions = JSON.parse(data);
          if (!Array.isArray(submissions)) {
              submissions = []; 
          }
      } catch (error) {
          console.log(error);
          submissions = []; 
      }
  
      submissions.push(submission);
  
      fs.writeFile('data/submissions.json', JSON.stringify(submissions, null, 2), (err) => {
          if (err) {
              console.log(err);
              res.status(500).json({ message: 'Error' });
          } else {
              res.json({ message: 'Success' });
          }
      });
  });
  

})


app.listen(port, () =>{
  console.log(`Server running on port ${port}`);
  
})
