import { Router } from "express";
import { FuncionesController } from "./funciones.controller";

const router = Router();

//T1
router.post("/temperatura",FuncionesController.temp);
router.post("/resolvedor",FuncionesController.resolvedor);
router.post("/mejor-paridad",FuncionesController.mejorParidad);
router.post("/peor-paridad",FuncionesController.peorParidad);
//T2
router.post("/find-max",FuncionesController.findMax);
router.post("/includes",FuncionesController.includes);
router.post("/suma",FuncionesController.sum);
router.post("/missing-numbers",FuncionesController.missingNumbers);
//T3
router.post("/desglosar", FuncionesController.desglosarString);
router.post("/two-sum", FuncionesController.twoSum);
router.post("/conversion-romana", FuncionesController.conversionRomana);
router.post("/descomposicion", FuncionesController.descomposicion);

export default router;