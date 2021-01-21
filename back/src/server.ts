import './Repository/connect';
import express, {Request, Response, NextFunction} from 'express';
import routes from "./API/Routes";
import bodyParser from "body-parser";
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.json());
app.use(routes);

//CATCH INTERNAL ERROR*******************************
app.use((error:Error, request: Request, response: Response, next:NextFunction) => {
  console.log(error.stack);
  response.status(500);
  response.json({ error: error.stack });
});

app.use((request, response, next) => {
  const error = new Error("Not Found");
  next(error.stack);
});


const port = process.env.PORT||3333
app.listen(port, ()=>console.log(`Server started at ${port}!!`));