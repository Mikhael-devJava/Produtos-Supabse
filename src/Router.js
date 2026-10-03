import { ControllerGET, ControllerPOST, ControllerPUT, ControllerDELETE } from "./Controller.js"
import {Autenticar} from "./Autenticacion.js"
import express from "express"

const Router = express()

Router.get("", ControllerGET)
Router.post("", Autenticar, ControllerPOST)
Router.put("/",Autenticar, ControllerPUT)
Router.delete("/",Autenticar, ControllerDELETE)

export default Router