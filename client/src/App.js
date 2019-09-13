import React from "react";
import { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ArtPage from "./pages/ArtPage/ArtPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import { theme, GlobalStyle, Container } from "./theme/theme";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <NavBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/art" component={ArtPage} />
          <Route exact path="/book" component={BookingPage} />
        </Switch>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
