import { default as apiRouter } from "./apiRouter.mjs";
import { default as adminRouter } from "./adminRouter.mjs";

export const routers = [
    apiRouter,
    adminRouter
];