import { ControllerGET, ControllerPOST, ControllerPUT, ControllerDELETE, ControllerFiltro } from "./Controller.js"
import {Autenticar} from "./Autenticacion.js"
import express from "express"

const Router = express.Router()

Router.get("/", ControllerGET)
Router.get("/:id", ControllerFiltro)
Router.post("/:id", Autenticar, ControllerPOST)
Router.put("/:id",Autenticar, ControllerPUT)
Router.delete("/:id",Autenticar, ControllerDELETE)

export default Router