import { Router } from "express";
import {
  getCruds,
  createCrud,
  getSingleCrud,
  updateCrud,
  deleteCrud,
} from "../controllers/crudControllers";

const router = Router();

router.get("/", getCruds);

router.get("/:id", getSingleCrud);

router.post("/new", createCrud);

router.put("/:id", updateCrud);

router.delete("/:id", deleteCrud);

export default router;
