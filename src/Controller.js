import * as Service from "./Sevice.js"

//Mostrar a lista de produtos do Banco de dados
export async function ControllerGET(req, res) {
    const Get = await Service.ProductsGET()
    if(Get == false){
        return res.status(404).send("Requisição Falhou")
    }else{
        res.status(200).json(Produtos)
    }
}

//Pega o id no Parametro da requisição e envia para ProductsFiltro
export async function ControllerFiltro(req, res, next) {
    const id = req.params.id;
    if (id === null && id === ""){
        res.status(404).json("Id Invalido")
    }else{
        const filtro = await Service.ProductsFiltro(id)

        if(filtro == false){
        return res.status(404).send("Requisição Falhou")
    }
    }next()
}

//Pega os valores name e price no body e verifica se o sistema está funcionando corretamente
export async function ControllerPOST(req, res) {
    const {name, price} = req.body
    const Post = await Service.ProductsPOST(name, price)

    if(await Post == false){
        return res.status(404).send("Requisição Falhou")
    }
}

//Pegar os valores id, name e price e manda para ProductsPUT
export async function ControllerPUT(req, res) {
    const id = req.params.id
    const {name, price} = req.body
     const Put = await Service.ProductsPUT(id, name, price)

    if(await Put == false){
        return res.status(404).send("Requisição Falhou")
    }
}

//Pega o Valor id e envia para ProductsDELETE
export async function ControllerDELETE(req, res) {
    const id = req.params.id
    if (id === undefined && id === null && id === "") {
        return res.status(400).json("Informe o id do produto no corpo da requisição" )
    }
    const deletedProducts = await Service.ProductsDELETE(id)
    if(await deletedProducts == false){
        return res.status(404).send("Requisição Falhou")
    }
}