import { defineStore } from "pinia";

export const useBagStore = defineStore("bag", {
    state: () => ({
        items: [] as any[],
    }),
    getters: {
        totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price, 0),
    },
    actions: {
        addToBag(product: any) {
            this.items.push(product);
        },
        removeFromBag(index: number) {
            this.items.splice(index, 1);
        },
    },
});
