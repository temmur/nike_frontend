import { defineStore } from "pinia";

export const useBagStore = defineStore("bag", {
    state: () => ({
        items: [] as any[], // bu yerda mahsulotlar saqlanadi
    }),
    actions: {
        addToBag(product: any) {
            // Agar mahsulot allaqachon bo‘lsa miqdorini oshiramiz
            const existing = this.items.find((item) => item.id === product.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                this.items.push({ ...product, quantity: 1 });
            }
        },
        removeFromBag(id: number) {
            this.items = this.items.filter((item) => item.id !== id);
        },
        clearBag() {
            this.items = [];
        },
    },
});
