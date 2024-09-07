import {createContext, useState} from "react";
import {doctors} from '../assets/assets_frontend/assets.js'

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [login, setLogin] = useState(false)
    const currencySymbol = '$'
    const value = {
        doctors,
        currencySymbol,
        login, setLogin
    }
    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider;