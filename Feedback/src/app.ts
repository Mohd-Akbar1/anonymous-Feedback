import express, { Router ,Request,Response} from "express";
const app = express();
import router from './route/user'
import cors from 'cors'

app.use(cors(
    {
        origin:"*"
    }
))
app.use(express.json())
app.use('/chat',router)
app.get('/', (req:Request, res:Response) => {
    res.send('Hello World of feedback! ')
})

app.listen(8000, () => {
    console.log(' app listening on port 8000!')
})