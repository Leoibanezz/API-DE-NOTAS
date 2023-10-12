import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://leoibanezz:NkbNMafMDvcSZuH2@cluster0.4imt2dp.mongodb.net/Notas?retryWrites=true&w=majority";

export const JWT_SECRET = process.env.JWT_SECRET || "secretkey";