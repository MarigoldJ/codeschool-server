import { ICamp } from "../interfaces/camp.interface";
import { NextFunction, Request, Response } from "express";
import { CampService } from "../services";

const openCamp = async (req: Request, res: Response, next: NextFunction) => {
  const data: ICamp = req.body;
  console.log("강의제목 : ", data.classTitle);
  try {
    const createdCamp = await CampService.createCamp(data);
    // console.log(createdCamp);
    res.json({ isOk: true, message: `수업개설 완료: ${data.classTitle}` });
  } catch (error) {
    res.json({ isOk: false });
    next(error);
  }
};
const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // 찾기
    // 가져오기?
  } catch (error) {
    next(error);
  }
};
const getHotCamps = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const hotCamps = await CampService.getHotCamps();
    res.json(hotCamps);
  } catch (error) {
    res.json({ isOk: false });
    next(error);
  }
};
const getSaledCamps = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const saledCamps = await CampService.getSaledCamps();
    res.json(saledCamps);
  } catch (error) {
    res.json({ isOk: false });
    next(error);
  }
};

export default {
  openCamp,
  findAll,
  getHotCamps,
  getSaledCamps,
};
