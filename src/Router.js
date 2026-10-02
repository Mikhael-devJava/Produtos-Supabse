import { ControllerGET, ControllerPOST, ControllerPUT } from "./Controller.js"
import {Autenticar} from "./Autenticacion.js"
import express from "express"

const Router = express()

Router.get("", ControllerGET)
Router.post("", Autenticar, ControllerPOST)
Router.put("/",Autenticar, ControllerPUT)

export default Router