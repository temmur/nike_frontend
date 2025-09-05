import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useProductStore = defineStore("productStore", () => {
    const product = ref<any>(JSON.parse(localStorage.getItem("product") || "null"));
    const load = ref(true);

    const setProduct = (data: any) => {
        product.value = data;
        load.value = false;
    };

    watch(product, (val) => {
        localStorage.setItem("product", JSON.stringify(val));
    }, { deep: true });

    return { setProduct, product, load };
});
