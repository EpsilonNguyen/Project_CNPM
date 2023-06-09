import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {

    router.get("/", homeController.getHome);

    router.post("/api/login", homeController.handleLogin);

    return app.use("/", router);
}

module.exports = initWebRoutes;