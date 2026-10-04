import { ControllerGET, ControllerPOST, ControllerPUT, ControllerDELETE, ControllerFiltro } from "./Controller.js"
import {Autenticar} from "./Autenticacion.js"
import express from "express"

const Router = express()

Router.get("/", ControllerGET)
Router.get("/:id", ControllerFiltro)
Router.post("/", Autenticar, ControllerPOST)
Router.put("/",Autenticar, ControllerPUT)
Router.delete("/",Autenticar, ControllerDELETE)

export default Router