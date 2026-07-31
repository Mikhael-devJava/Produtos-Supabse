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