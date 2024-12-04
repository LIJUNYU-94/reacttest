import { useState, useEffect } from "react";
import data from "./assets/storeData.json";

function Store({ name, address, tel }) {
  return (
    <>
      <li>{name}</li>
      <p>住所：{address}</p>
      <p>電話番号:{tel}</p>
    </>
  );
}

function Showstore() {
  const [first, select] = useState("Tohoku");
  const stores = data.regions[first];
  return (
    <>
      <h1>店舗情報</h1>
      <select
        name="area"
        id="area-select"
        onChange={(x) => select(x.target.value)}
      >
        <option value="Tohoku">東北</option>
        <option value="Kansai">関西</option>
        <option value="Kanto">関東</option>
      </select>
      <ul>
        {stores.map((area, index) => (
          <Store
            key={index}
            name={area.storeName}
            address={area.address}
            tel={area.phoneNumber}
          />
        ))}
      </ul>
    </>
  );
}

export default Showstore;
