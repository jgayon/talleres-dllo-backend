import { Request, Response } from "express";
import {/*T1*/ temp, resolvedor, mejorParidad,peorParidad,
        /*T2*/ findMax, includes, sum, missingNumbers,
        /*T3*/ desglosarString, twoSum, conversionRomana, descomposicion,} from "./index";

export class FuncionesController {
  //T1
  static temp(req: Request, res: Response) {
    const { a } = req.body;
    const resultado = temp(Number(a));
    return res.json({ resultado });
  }

  static resolvedor(req: Request, res: Response) {
    const { a, b, c, signo } = req.body;
    const resultado = resolvedor(Number(a), Number(b), Number(c), signo);
    return res.json({ resultado });
  }

  static mejorParidad(req: Request, res: Response) {
    const { a } = req.body;
    const resultado = mejorParidad(Number(a));
    return res.json({ resultado });
  }

  static peorParidad(req: Request, res: Response) {
    const { a } = req.body;
    const resultado = peorParidad(Number(a));
    return res.json({ resultado });
  }

  //T2
  static findMax(req: Request, res: Response) {
    const { lista } = req.body;
    const resultado = findMax(lista.map(Number));
    return res.json({ resultado });
  }

  static includes(req: Request, res: Response) {
    const { lista, num } = req.body;
    const resultado = includes(lista.map(Number), Number(num));
    return res.json({ resultado });
  }

  static sum(req: Request, res: Response) {
    const { lista } = req.body;
    const resultado = sum(lista.map(Number));
    return res.json({ resultado });
  }

  static missingNumbers(req: Request, res: Response) {
    const { lista } = req.body;
    const resultado = missingNumbers(lista.map(Number));
    return res.json({ resultado });
  }

  //T3
  static desglosarString(req: Request, res: Response) {
    try {
      const { texto, tipo } = req.body;
      const resultado = desglosarString(String(texto), tipo);
      return res.json({ resultado });
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  static twoSum(req: Request, res: Response) {
    const { nums, target } = req.body;
    const resultado = twoSum(nums.map(Number), Number(target));
    return res.json({ resultado });
  }

  static conversionRomana(req: Request, res: Response) {
    const { romano } = req.body;
    const resultado = conversionRomana(String(romano));
    return res.json({ resultado });
  }

  static descomposicion(req: Request, res: Response) {
    const { cadena } = req.body;
    const resultado = descomposicion(String(cadena));
    return res.json({ resultado });
  }
}