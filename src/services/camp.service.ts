import Camp from "../models/camp.model";
import { ICamp } from "../interfaces/camp.interface";

const createCamp = (data: ICamp) => {
  const camp = new Camp(data);
  return camp.save();
};
const getHotCamp = () => {
  return Camp.find({ isHot: true }).limit(4);
};
const getSaledCamp = () => {
  return Camp.find({ isSpecialDiscount: true }).limit(4);
};

export default {
  createCamp,
  getHotCamp,
  getSaledCamp,
};
