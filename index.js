import express from 'express';
import {main} from'./config/connectDatabase.js';
import { router } from './routes/index.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000;


app.get('/', (req,res)=>{
    // console.log(req);
    console.log("request recieved");
    res.send("Congratulations")
})

app.use('/api', router)

main().then(() => {
    app.listen(PORT, () => {
        console.log('server started at ' + PORT)
    })
})

export default app;