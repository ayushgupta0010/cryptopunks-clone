import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

const App = () => {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(2);

  useEffect(() => {
    axios
      .get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x6ae78100073e3C2111df7c0056BEef78f87d1061"
      )
      .then((res) => setPunkListData([...res.data.assets].reverse()))
      .catch((err) => err);
  }, []);

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
};

export default App;
