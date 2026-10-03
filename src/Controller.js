import * as Service from "./Sevice.js"

//Mostrar a lista de produtos do Banco de dados
export async function ControllerGET(req, res) {
    const Produtos = await Service.ProductsGET()
    res.status(200).json(Produtos)
}

//Pega os valores name e price no body e verifica se o sistema está funcionando corretamente
export async function ControllerPOST(req, res) {
    const {name, price} = req.body
    await Service.ProductsPOST(name, price)
    if( await Service.Funcionando === true ){
        res.status(201).json("Produto adicionado com sucesso! verifique o banco para ver")
    }else{
        res.status(404).send("Erro ao tentar enviar os dados ao Banco de dados")
    }
}

//Pegar os valores id, name e price e manda para ProductsPUT
export async function ControllerPUT(req, res) {
    const {id, name, price} = req.body
    await Service.ProductsPUT(id, name, price)
    if (await Service.Funcionando === true){
        res.status(201).send("Produto atualizado com sucesso!")
    }else{
        res.status(404).json("Erro ao Atualizar os produtos")
    }
}

//Pega o Valor id e envia para ProductsDELETE
export async function ControllerDELETE(req, res) {
    const {id} = req.body
    if (id === undefined || id === null || id === "") {
        return res.status(400).json("Informe o id do produto no corpo da requisição" )
    }

    const deletedProducts = await Service.ProductsDELETE(id)
    if (Service.Funcionando === false) {
        return res.status(500).json("Erro ao deletar o produto")
    }
    if (deletedProducts.length === 0) {
        return res.status(404).json("Produto não encontrado" )
    }

    return res.status(200).json("Produto deletado com sucesso")}
