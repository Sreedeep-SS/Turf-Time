import Turf from "../models/turfModel.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const turfs = await Turf.find({});
        res.status(200).json({ success: true, data: turfs });
        console.log("Turfs fetched successfully - \n", turfs);

    } catch (error) {
        console.log("Error in Fetching Turfs", error.message)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const createProduct = async (req, res) => {
    const turf = req.body; // APi body

    if (!turf.name || !turf.price || !turf.owner_contact) {
        return res.status(400).json({ success: false, message: "Please provide all fields the required fields" });

    }

    const newTurf = new Turf(turf);

    try {
        await newTurf.save();
        res.status(201).json({ success: true, data: newTurf });
        console.log("Resource created successfully - ", turf.name);
    } catch (error) {
        console.log("Error in Creating product", error.message)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const deleteProduct =  async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid ID" });
    }

    try {
        const deletedTurf = await Turf.findById(id);
        await Turf.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Resource Deleted Successfully", turf_Details: deletedTurf });
        console.log("Resource Deleted Successfully - ", deletedTurf.name);
    } catch (error) {
        console.log("Error in Deleting Turf", error.message)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const updateProduct =  async (req, res) => {
    const { id } = req.params;
    const turf = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid ID" });
    }

    try {
        const updatedTurf = await Turf.findByIdAndUpdate(id, turf, { new: true });
        res.status(200).json({ success: true, message: "Resource Updated Successfully", turf_Details: updatedTurf });
        console.log("Resource Updated Successfully - ", updatedTurf.name);
    } catch (error) {
        console.log("Error in Updating Turf", error.message)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}