import axios from "axios";
import React, { useContext, useState } from "react";

const getUrls = "http://localhost:5000/api/v1/url";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [urlData, setUrls] = useState([]);

  async function getUrlData() {
    const response = await axios.get(getUrls);
    const urls = response.data.urls;
    setUrls(urls);
  }
  React.useEffect(() => {
    getUrlData();
  }, []);

  return <AppContext.Provider value={urlData}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
