import { Router } from "express";
import fetch from 'cross-fetch';
const routes = Router();

routes.get("/", (req:any, res:any) => {

const cors = {
    origin: "http://localhost:3000"
};

res.header("Access-Control-Allow-Origin", cors.origin);
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.type('application/json'); 

const url = 'https://itunes.apple.com/search?term=' + req.query.term;
  fetch(url)
    .then(response => {
      return response.json();
    }).then(data => {
      return res.json(data);
    });
});
export default routes;
