import { Box } from "@chakra-ui/react"
import { Routes , Route} from "react-router-dom"
import CreatePage from "./pages/CreatePage.jsx"
import HomePage from "./pages/HomePage.jsx"
import NavBar from "./components/Navbar.jsx"


function App() {
  

  return (
   <Box minH={"100vH"}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
   </Box>
      
  )
}

export default App
