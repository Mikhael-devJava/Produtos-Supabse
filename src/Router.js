import { ControllerGET, ControllerPOST, ControllerPUT, ControllerDELETE, ControllerFiltro } from "./Controller.js"
import {Autenticar} from "./Autenticacion.js"
import express from "express"

const Router = express()

export const GetProdutos = Router.get("/", ControllerGET)
export const GetFiltragem = Router.get("/", ControllerFiltro)
export const Post = Router.post("/", Autenticar, ControllerPOST)
export const Put = Router.put("/",Autenticar, ControllerPUT)
export const Delete =Router.delete("/",Autenticar, ControllerDELETE)
