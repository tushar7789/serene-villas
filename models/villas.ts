import mongoose, {Schema} from "mongoose"

interface VillaSchemaInterface {
    villaNumber?: number;
    name?: string;
    area?: string;
    rating?: number;
    cost?: number,
    ammenities?: string[][];
}

const VillaSchema : Schema = new Schema<VillaSchemaInterface>({
    villaNumber : {
        type: Number,
    },
    name : {
        type: String, 
    },
    area : {
        type: String
    },
    rating : {
        type: Number,
    },
    cost : {
        type: Number,
    },
    ammenities : {
        type: [[String]]
    }}
);

const Villas = mongoose.models.Villas ||  mongoose.model<VillaSchemaInterface>('Villas', VillaSchema);

export default Villas;