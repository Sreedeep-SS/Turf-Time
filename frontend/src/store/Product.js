import { useState } from "react";
import { create } from "zustand";

export const useTurfStore = create((set) => ({
    turfs: [],
    setTurfs: (turfs) => set({ turfs }),
    createTurf: async (newTurf) => {
        if (!newTurf.name || !newTurf.price || !newTurf.location) {
            return { success: false, message: "Please fill in all the fields" }
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
        return { success: true, message: "Turf registered successfully" }
    },
    fetchTurfs: async () => {
        const res = await fetch("/api/turfs")
        const data = await res.json()
        set({ turfs: data.data })
    },
    deleteTurfs: async (pid) => {
        const res = await fetch(`/api/turfs/${pid}`, {
            method: "DELETE",
        })
        const data = await res.json()
        if(!data.success) return { success: false, message: data.message}

        set(state => ({ turfs: state.turfs.filter(turf => turf._id !== pid)}))

    },
    updateProduct: async (pid, updatedProduct) => {
		const res = await fetch(`/api/products/${pid}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProduct),
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		
		set((state) => ({
			products: state.products.map((product) => (product._id === pid ? data.data : product)),
		}));

		return { success: true, message: data.message };
	},

}));

