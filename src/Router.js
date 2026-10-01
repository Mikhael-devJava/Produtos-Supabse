import { ControllerGET, ControllerPOST } from "./Controller.js"
import {Autenticar} from "./Autenticacion.js"
import express from "express"

const Router = express()

Router.get("", ControllerGET)
Router.post("", Autenticar, ControllerPOST)

export default Router