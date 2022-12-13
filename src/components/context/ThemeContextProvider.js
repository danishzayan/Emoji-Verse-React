import ThemeContext from "./ThemeContext";

const ThemeContextProvider = (props)=>{
    <ThemeContext.Provider value="light">
        {props.children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider;