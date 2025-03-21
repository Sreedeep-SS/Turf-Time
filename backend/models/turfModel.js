import mongoose from "mongoose";

const turfSchema = new mongoose.Schema({
    owner_contact: {
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: false
    },
    location:{
        type: String,
        required: false
    },
}, {
    timestamps: true
}
);

const Turf = mongoose.model("Turfs", turfSchema);

export default Turf;