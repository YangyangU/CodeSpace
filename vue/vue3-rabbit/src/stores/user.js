import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const getUserInfo = async (account, password) => {
        const res = await loginAPI(account, password)
        userInfo.value = res.result
    }
    const clearUserInfo = () => {
        userInfo.value = {}
    }
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
    {
        persist: true,
    },
)