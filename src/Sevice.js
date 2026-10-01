import {supabase} from "./Supa.js"
export let Funcionando = true

export async function ProductsGET() {
    try {
        const {data, error} = await supabase
        .from("produtos")
        .select("*")

        if(error){
            console.log("Erro ao tentar verificar os dados do Banco de dados")
            Funcionando = false
        }else{
            Funcionando = true
        }
        return data
    } catch (error) {
        console.log("O Banco de dados não está disponivel no momento")
        Funcionando = false
    }
}


export async function ProductsPOST(name, price) {
    const dados = typeof name === "object" && name != null && !Array.isArray(name) ? 
    name : {name, price}
    try {
        const {data, error} = await supabase
        .from("produtos")
        .insert([dados])

        if(error){
            console.log("Erro ao enviar os Dados ao Supabase")
            console.log(error)
            Funcionando = false
        }else{
            Funcionando = true
        }
        return data
    } catch (error) {
        console.log("Erro no Servidor, na parte POST do Model")
        Funcionando = false
    }
}