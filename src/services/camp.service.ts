import Camp from "../models/camp.model";
import { ICamp } from "../interfaces/camp.interface";

const createCamp = (data: ICamp) => {
  const camp = new Camp(data);
  return camp.save();
};
const getHotCamps = () => {
  return Camp.find({ isHot: true }).limit(4);
};
const getSaledCamps = () => {
  return Camp.find({ isSpecialDiscount: true }).limit(4);
};
const getCampById = (id) => {
  return Camp.findById(id).limit(1);
};

export default {
  createCamp,
  getHotCamps,
  getSaledCamps,
  getCampById,
};
