import axios from "axios"

// const settings = {
//     withCredentials: true,
//     headers: {
//         "API-KEY": "64b4d118-e3b8-47de-a70e-563a8b9d0ed6"
//     }
// }
//
// const instance = axios.create({
//     baseURL: "https://social-network.samuraijs.com/api/1.1/",
//     ...settings
// })


export const requestAPI = {
    madeRequest(isChecked: boolean) {
        return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {
            success: isChecked
        })
    }
}