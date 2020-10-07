import React from "react";

import GlobalStyles from "./assets/styles/GlobalStyles";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import VideoArea from "./components/VideoArea";
import SuggestionList from "./components/SuggestionList";

function App() {
  return (
    <>
      <GlobalStyles />

      <Layout>
        <Navbar />

        <VideoArea />
        <SuggestionList />
      </Layout>
    </>
  );
}

export default App;
