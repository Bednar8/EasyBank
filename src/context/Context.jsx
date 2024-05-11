import {createContext, useContext, useState} from "react"

const Context = createContext()

function ContextProvider({children}) {
	const [isErrorPopupShow, setIsErrorPopupShow] = useState(false)

	return (
		<Context.Provider value={{isErrorPopupShow, setIsErrorPopupShow}}>
			{children}
		</Context.Provider>
	)
}

function usePopup() {
	const context = useContext(Context)
	return context
}
export {ContextProvider, usePopup}
