import {defineStore} from "pinia";
import {ref, reactive} from 'vue'
export const getProduct = defineStore('productStore', ()=> {
    const product = ref(null)
    const load = ref(true)
    const getProduct =(data:any)=> {
        product.value = data
        load.value = false
    }
    return {getProduct, product, load}
})


// export const useInstagramStore = defineStore("InstagramStore", () => {
//     const instagram = ref([]);
//     const load = ref(true);
//     function fetchInstagramList() {
//         return new Promise((resolve, reject) => {
//             axios
//                 .get("/instagram/InstagramPostList")
//                 .then((res) => {
//                     instagram.value = res.data?.results;
//                     resolve(res.data);
//                 })
//                 .catch((error) => {
//                     reject(error);
//                 })
//                 .finally(() => (load.value = false));
//         });
//     }
//     return { fetchInstagramList, instagram, load };
// });
