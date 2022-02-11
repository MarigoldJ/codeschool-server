import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || "";
    await connect(MONGODB_URI).then(() => console.log("DB connected"));
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
