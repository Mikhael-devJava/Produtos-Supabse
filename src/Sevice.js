import {supabase} from "./Supa.js"
export let Funcionando = true

// Seleciona Todos os dados da Tabela produtos
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

// Verifica se name é object, se não é null e se não é um Array e inseri os dados no Banco
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
        console.log("Erro no Servidor, na parte POST")
        Funcionando = false
    }
}

// Recebe os valores id, name e price, compara o id com o id do banco e atualiza o produto
export async function ProductsPUT(id, name, price) {
    try {
        const {data, error} = await supabase
        .from("produtos")
        .update({"name": name, "price":price})
        .eq("id",id)

        if(error){
            console.log("Erro na Parte de Comparar dados no PUT")
            Funcionando = false
        }
        return data
    }catch (error) {
        console.logo("Erro no Servidor, na parte de PUT ")
        Funcionando = false
    }
}

export async function ProductsDELETE(id) {
    try {
        const {data, error} = await supabase
        .from("produtos")
        .delete()
        .eq("id", id)
        .select("id")

        if(error){
            console.log("Erro Na parte de Deletar dados")
            console.log(error)
            Funcionando = false
            return null
        }
        Funcionando = true
        return data
    } catch (error) {
        console.log("Erro no Servidor, na parte de DELETE", error)
        Funcionando = false
        return null
    }
}
