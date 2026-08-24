import { createContext } from "react";
import myImage from "../assets/abhijeet.png"

export const Gand = createContext()

export default function GandProvider({children}){
    let name = "Sr Inspector Abhijeet"
    let dialog = "Ek ** pe rapta mara na Sadak pe *** phirega"
    return(
        <Gand.Provider value={{name, dialog,myImage}}>
            {children}
        </Gand.Provider>
    )
}