import { Box } from "@chakra-ui/layout";
import Header from "./components/Header";
import HeroTeam from "./components/HeroTeam/HeroTeam";
import { TeamContextProvider } from "./Context/TeamContext/TeamContext";
import { AppContextProvider } from "./Context/AppContext";
import SearchDrawer from "./components/HeroSearch/Drawer";

function App() {
  return (
    <AppContextProvider>
      <TeamContextProvider>
        <SearchDrawer/>
        <Header />
        <Box maxW="80%" m="auto">
            <HeroTeam />
        </Box>
      </TeamContextProvider>
    </AppContextProvider>
  );
}

export default App;
