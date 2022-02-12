import { Router } from "express";
import { CampController } from "../controllers";

const router = Router();

router.use("/create", CampController.openCamp);
router.use("/hotcamps", CampController.getHotCamps);
router.use("/saledcamps", CampController.getSaledCamps);
router.use("/getbyid", CampController.getById);

export default router;
