import axios, {AxiosResponse} from "axios";
import {IData} from "../types/IData.ts";

function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export async function getAccount() {
    try {
        const response = await axios.get<AxiosResponse, IData>('https://654798f6902874dff3ac8749.mockapi.io/cart')
        const res = response.data.length ? response.data[getRandomInt(0, response.data.length)] : null
        if (res) {
            await axios.delete(`https://654798f6902874dff3ac8749.mockapi.io/cart/${res.id}`)
        }
        return res
    } catch (e) {
        alert("Непредвиденная ошибка, попробуйте снова")
    }
}


