import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

conectar();

async function conectar(){
    await mongoose.connect(process.env.MONGO_URL).
        then(()=> console.log("Conectado ao MongoDB")).
        catch(err => console.log(err));
}

export default mongoose;