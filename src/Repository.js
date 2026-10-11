import { createClient } from "@supabase/supabase-js";
import path from "path"
import { fileURLToPath} from "url";
import dotenv from "dotenv"

//Configurações para o sistema encontrar o .env
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({path:path.resolve(__dirname,".env")})

//Pegando as Variaveis de ambiente
const SupaURL = process.env.SupaURL
const SupaKEY = process.env.SupaKEY

//Exportando o CreateClient do supabase
export const supabase = createClient(SupaURL, SupaKEY)