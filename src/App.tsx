import './App.css'
import {getAccount, getRandomInt} from "./api/getAccounts.ts";
import {useEffect, useState} from "react";
import {postAccounts} from "./api/postAccounts.ts";

function App() {

    const [isOpen, setIsOpen] = useState(false)

    function putData() {
        getAccount().then(res => {
            if (res) {
                localStorage.setItem("data", JSON.stringify(res))
                setIsOpen(true)
            } else  {
                alert('Аккаунты закончились :(')
            }
        })

    }

    useEffect(() => {
        if (localStorage.getItem('data')) setIsOpen(true)
    }, []);

    function deleteData() {
        postAccounts({login: JSON.parse(localStorage.getItem('data'))?.login, password:JSON.parse(localStorage.getItem('data'))?.password})
        localStorage.removeItem('data')
        setIsOpen(false)
    }

    return (
        isOpen ?
            <div>
                <h3>Логин: {JSON.parse(localStorage.getItem('data'))?.login}</h3>
                <h3>Пароль: {JSON.parse(localStorage.getItem('data'))?.password}</h3>
                <button onClick={() => deleteData()}>Вернуть аккаунт</button>
            </div>
            :
            <button onClick={() => putData()}>Получить аккаунт</button>

    )
}

export default App
