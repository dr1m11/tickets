import {IAccount} from "../types/IAccount.ts";
import axios from "axios";

export const postAccounts = (data: IAccount) => {
    try {
        axios.post('https://654798f6902874dff3ac8749.mockapi.io/cart', data)
    } catch (e) {
        alert("Непредвиденная ошибка, попробуйте снова")
    }
}