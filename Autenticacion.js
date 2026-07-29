import jsonwebtoken from "jsonwebtoken"
import path from "path"
import { fileURLToPath} from "url";
import dotenv from "dotenv"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({path:path.resolve(__dirname,".env")})

//Pega uma variavel de ambiente para assinar o token
const SECRETadm = process.env.SECRET

//Gera um token ADM
export const TOKEN = jsonwebtoken.sign({name: "Mikhael"}, SECRETadm,{expiresIn: "1h"})

//Verifica se o token existe e valida
export async function Autenticar(req, res, next) {
    const AuthHerads = req.headers["authorization"]
    const token = AuthHerads && AuthHerads.split(" ")[1]
    if(!token){
        return res.status(401).send("Token não fornecido")
    }
    jsonwebtoken.verify(token, SECRETadm, (err, user) => {
        if(err){
            return res.send("Token invalido")
        }
        next()
    })
    
}
export default Autenticar
