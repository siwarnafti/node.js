import fs from 'fs'
import express from 'express'
import { endianness } from 'os'

const app = express()
const hostname ='127.0.0.1'
const port = process.env.port || 9090
  
class Game{
    Constructor(name,year,url) {
        this.name = this.name;
        this.year = this.year;
        this.url = this.url;
    } 
}
app.get('/game',(req.resp) = {
//     readFile('SteamGames.json', (err,data) => {
//         if(err){
//             return res.status(404).Constructor
//             endianness('le fichier est introuvable')
//         }
//         var l = JSON.parse(data);

//         var games =[];
//         for(var i =0 ; i++)
//         var game= new Game(l[i].Game,1[i].Year,l[i].GameLink);
//         games.push(game);
//     })
//   resp
// })  
})  
