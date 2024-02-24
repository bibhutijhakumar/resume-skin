import React, { useState } from "react";
import { useEffect } from "react";
import { BlobHandler } from "Components/blobHandler";

import { renderToString } from "react-dom/server";
import { generateData } from "Components/generateData";
// import {ExprData} from './ExprData';
import { ModalPopup } from "Components/ModalPopup";
import { HTMLView } from "Components/HTMLView";
import { TitleBar } from "Components/TitleBar";
import { useLoading } from "Components/SkinContext";
let label = "Experience";
let skinCodes = [
  "W001",
  "W002",
  "W003",
  "W004",
  "W005",
  "W006",
  "W007",
  "W008",
  "W009",
  "W010",
  "W011",
  "W012",
  "W013",
  "W014",
  "W015",
  "W016",
  "W017",
  "W018",
  "W019",
  "W020",
  "W021",
  "W022",
];
let originalSkin = [
  "MLS1",
  "CBG1",
  "CBG2",
  "MLT7",
  "MLS5",
  "MLS6",
  "MLS7",
  "MLS8",
  "MLS9",
  "MLV1",
  "MLV3",
  "MLV5",
  "MLW4",
  "MLW5",
  "MLW7",
  "MTP1",
  "TML4",
  "LCB1",
  "CNT3",
  "LCB3",
  "MPR5",
  "SMP2",
];
export let skinExprLength = skinCodes.length;

function ExperienceIndex() {
  const { updateLoading } = useLoading();
  const [ExprData, setExprData] = useState([]);
  useEffect(() => {
    updateLoading(true);
    generateData(skinCodes, label).then((data) => {
      updateLoading(false);
      setExprData(data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("Data in experience", ExprData);

  return (
    <>
      <div id="experience">
        {ExprData.map((data, index) => (
          <div className="cmp-row">
            <TitleBar
              id={data.id}
              name={data.name}
              key={data.index}
              skinCode={skinCodes[index]}
              priority={6}
              originalSkin={originalSkin[index]}
            />
            <HTMLView
              id={data.id}
              name={data.name}
              htmlView={data.htmlView}
              key={data.index}
            />
            <ModalPopup
              id={data.id}
              name={data.name}
              copyHTMLCode={data.htmlData}
              copyCSSCode={data.copyCSSCode}
              key={data.index}
            />
            {/* <BlobHandler
              getDataFromHTMLString={data.getDataFromHTMLString}
            ></BlobHandler> */}
          </div>
        ))}
      </div>
    </>
  );
}
export { ExperienceIndex };
