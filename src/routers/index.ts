import { Router } from "express";
import CampRouter from "./camp.router";

const router = Router();
router.use("/camps", CampRouter);
router.get("/test", (req, res) => {
  console.log("get all!");
  return res.send("all of camps");
});

export default router;
