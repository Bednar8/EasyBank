import {createContext, useContext, useEffect, useState} from "react"

const Context = createContext()

function ContextProvider({children}) {
	const [isErrorPopupShow, setIsErrorPopupShow] = useState(false)
	let [timer, setTimer] = useState(3)

	useEffect(() => {
		if (timer === 0) {
			setIsErrorPopupShow(false)
			setTimer(3)
			return
		}
		let decreseTimer
		if (isErrorPopupShow) {
			decreseTimer = setInterval(() => {
				setTimer((time) => time - 1)
			}, 1000)
		}

		return () => clearInterval(decreseTimer)
	}, [isErrorPopupShow, timer])

	return (
		<Context.Provider
			value={{isErrorPopupShow, setIsErrorPopupShow, timer, setTimer}}>
			{children}
		</Context.Provider>
	)
}

function usePopup() {
	const context = useContext(Context)
	return context
}
export {ContextProvider, usePopup}
