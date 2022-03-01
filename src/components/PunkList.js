import React from "react";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkListData, setSelectedPunk }) => (
  <div>
    <div className='punkList'>
      {punkListData.map((punk) => (
        <div key={punk.token_id} onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_url}
          />
        </div>
      ))}
    </div>
  </div>
);

export default PunkList;
