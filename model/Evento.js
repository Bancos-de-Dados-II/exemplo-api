import mongoose from "../database/mongoose";
import {randomUUID} from "crypto";
const {Schema} = mongoose;

const eventoSchema = new Schema({
    id:{
        type: 'UUID',
        default: () => randomUUID(),
        required: true
    },
    descricao: String,
    data: {
        type: 'Date',
        default: Date.now
    },
    tipo: {
        type: String,
        enum: ['Científico', 'Tecnológico', 'Cultural']
    },
    localizacao: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    }
});