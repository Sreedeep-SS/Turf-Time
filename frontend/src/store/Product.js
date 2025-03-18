import { useState } from "react";
import { create } from "zustand";

export const useTurfStore = create((set) => ({
    turfs: [],
    setTurfs: (turfs) => set({ turfs }),
    createTurf: async (newTurf) => {
        if(!newTurf.name || !newTurf.price || !newTurf.location){
            return {success: false, message:"Please fill in all fields"}
        }
        const res = await fetch("/api/turfs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTurf)
        })
        const data = await res.json()
        set((state) => ({ turfs: [...state.turfs, data.data] }))
        return {success: true , message:"Product created successfully"}
    }
}));

