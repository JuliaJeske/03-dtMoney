import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";


export function App() {
 

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <h1>Hello word</h1>
 
      <Transactions />
    </ThemeProvider>
    
  )
}


