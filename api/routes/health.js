import { AliveResponse } from "../models/HealthDTO.js";
import { Router } from "express";

const router = Router();

router.get("/alive", (_, res) => {
  res.json(new AliveResponse("App is alive and ready to go !"));
});

export default router;
