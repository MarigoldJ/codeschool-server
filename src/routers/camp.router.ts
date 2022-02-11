import { Router } from "express";
import { CampController } from "../controllers";

const router = Router();

router.use("/create", CampController.openCamp);
router.use("/hotcamps", CampController.getHotCamp);

export default router;
