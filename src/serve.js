import * as Router from "./Router.js"
import dotenv from "dotenv"
import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import {Autenticar, TOKEN} from  "./Autenticacion.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({path:path.resolve(".env")})
const PORT = process.env.PORT

const app = express()
app.use(express.json())

//Cria as Rotas
app.use("/Produtos/:id",Router.Delete,Autenticar)
app.use("/Produtos",Router.GetProdutos, Router.Post)

//Exibe no Terminal o Token
console.log(TOKEN)

//Roda o Programa
app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}/Produtos/`)
})