import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors()); 

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://splitter:Bn91596665@cluster0.p0b80aj.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(() =>app.listen(PORT, () => console.log(`Server is running on ${PORT}`)))
.catch((error) => console.log(error.message));

