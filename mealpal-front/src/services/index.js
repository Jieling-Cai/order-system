import axios from "axios";
export function login(params) {
    return axios.post("/guestinfo",params)
}
export function getRestaurantList(){
    return axios.get("/restaurant/")
}