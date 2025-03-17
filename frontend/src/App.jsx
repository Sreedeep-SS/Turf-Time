import { Box } from "@chakra-ui/react"
import { Routes , Route} from "react-router-dom"
import CreatePage from "./pages/CreatePage.jsx"
import HomePage from "./pages/HomePage.jsx"
import NavBar from "./components/Navbar.jsx"
import { useColorModeValue } from "./components/ui/color-mode.jsx"


function App() {
  

  return (
   <Box minH={"100vH"} bg={useColorModeValue("blue.100", "blue.900")}>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/create" element={<CreatePage />} />
      </Routes>
   </Box>
      
  )
}

export default App
