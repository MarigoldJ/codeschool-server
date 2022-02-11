import { Schema, model } from "mongoose";
import { ICamp } from "../interfaces/camp.interface";

const CampSchema = new Schema<ICamp>({
  date: { type: Date, default: Date.now },

  isHot: { type: Boolean },
  isSpecialDiscount: { type: Boolean },
  recruitStatus: { type: String },
  category: [{ type: String }],
  classTitle: { type: String, required: true },
  classSkill: [{ type: String }],
  classStart: { type: String },
  classPeriod: { type: String },
  classWhere: { type: String },
  classStudentCapacity: { type: Number },
  classThumbnail: { type: String },
  classDetail: [{ type: String }],
});

export default model("Camp", CampSchema);
