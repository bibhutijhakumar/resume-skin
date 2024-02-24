// import {LnggData } from './LnggData'
import { useState } from "react";
import { ModalPopup } from "Components/ModalPopup";
import { HTMLView } from "Components/HTMLView";
import { TitleBar } from "Components/TitleBar";
import { generateData } from "Components/generateData";
import { useEffect } from "react";
import { BlobHandler } from "Components/blobHandler";
import { useLoading } from "Components/SkinContext";

let label = "Language";
let skinCodes = [
  "L001",
  "L004",
  "L002",
  "L005",
  "L003",
  "L006",
  "L007",
  "L008",
  "L009",
  "L010",
  "L011",
  "L012",
  "L013",
];
let originalSkin = [
  "MLS1",
  "SLI1",
  "CBG1",
  "MLI2",
  "MLS3",
  "MLI5",
  "TML4",
  "MLV5",
  "MLV6",
  "MLV4",
  "MLW5",
  "CBG2",
  "MLM3",
];
export let skinLnggLength = skinCodes.length;

function LnggIndex() {
  const { updateLoading } = useLoading();
  const [LnggData, setLnggData] = useState([]);
  useEffect(() => {
    updateLoading(true);
    generateData(skinCodes, label).then((data) => {
      setLnggData(data);
      updateLoading(false);
    });

    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div id="language">
        {LnggData.map((data, index) => (
          <>
            <div className="cmp-row">
              <TitleBar
                id={data.id}
                name={data.name}
                key={data.index}
                skinCode={skinCodes[index]}
                priority={9}
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
          </>
        ))}
      </div>
    </>
  );
}
export { LnggIndex };
