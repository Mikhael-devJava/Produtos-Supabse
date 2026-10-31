import * as Service from "./Sevice.js"

//Mostrar a lista de produtos do Banco de dados
export async function ControllerGET(req, res, next) {
    const Get = await Service.ProductsGET()
    if(Get == false){
        return res.status(404).send("Requisição Falhou")
    }else{
        res.status(200).json(Get)
    }next()
}

//Pega o id no Parametro da requisição e envia para ProductsFiltro
export async function ControllerFiltro(req, res, next) {
    const id = req.params.id
    if (id === null && id === undefined && id === ""){
        res.status(400).json("Informe o id no Corpo da URL")
    }else{
        const filtro = await Service.ProductsFiltro(id)

        if(filtro == false){
        return res.status(404).send("Requisição Falhou")
    }
    }next()
}

//Pega os valores name e price no body e verifica se o sistema está funcionando corretamente
export async function ControllerPOST(req, res, next) {
    const {name, price} = req.body
    if(name === undefined && name === null && name === ""){
        res.status(404).send("Informe o nome do Produto que deseja criar")
        if(price === undefined && price === null && price === "" && typeof price !== "Number"){
            res.status(404).send("Informe o Preço do Produto que deseja adicionar")
        }
    }
    const Post = await Service.ProductsPOST(name, price)

    if(Post == false){
        return res.status(404).send("Requisição Falhou")
    }next()
}

//Pegar os valores id, name e price e manda para ProductsPUT
export async function ControllerPUT(req, res, next) {
    const id = req.params.id
    if(id === undefined && id === null && id === ""){
         return res.status(400).json("Informe o id do produto na URL" )
    }
    const {name, price} = req.body
     const Put = await Service.ProductsPUT(id, name, price)

    if(Put == false){
        return res.status(404).send("Requisição Falhou")
    }next()
}

//Pega o Valor id e envia para ProductsDELETE
export async function ControllerDELETE(req, res,next) {
    const id = req.params.id
    if (id === undefined && id === null && id === "") {
        return res.status(400).json("Informe o id do produto no corpo da URL")
    }
    const deletedProducts = await Service.ProductsDELETE(id)
    if(deletedProducts == false){
        return res.status(404).send("Requisição Falhou")
    }next()
}