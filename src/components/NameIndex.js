import { ModalPopup } from 'Components/ModalPopup';
import { HTMLView } from 'Components/HTMLView';
import { TitleBar } from 'Components/TitleBar';
import { generateData } from "Components/generateData";
import { useEffect } from 'react';
import { BlobHandler } from 'Components/blobHandler';
import { useLoading } from '../common-components/SkinContext';
import {useState} from 'react';

let label = 'Name';
let skinCodes = ['N001', 'N002', 'N003', 'N004', 'N005','N006','N007','N008','N009','N010','N012','N013'];
let originalSkin = ['MLS1', 'MLS2', 'MLS3', 'MLS4', 'MLS5', 'CBG1', 'MLT7','MLV5','MLV7','MLW5','MLV1','MLM1','MLT6'];
export let skinNameLength = skinCodes.length;
// let NameData = await generateData(skinCodes, label);

function NameIndex() {
    const {updateLoading} = useLoading();
    const [NameData, setNameData] = useState([]);
    useEffect(() => {
        updateLoading(true)
        generateData(skinCodes, label)
        .then((data) => {
            updateLoading(false)
            setNameData(data)
        })
        .catch((err) => console.log("Err" + err));
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div id="name">
        {NameData.map((data, index) => (
          <div className="cmp-row">
            <TitleBar
              id={data.id}
              name={data.name}
              key={data.index}
              skinCode={skinCodes[index]}
              priority={1}
              originalSkin={originalSkin[index]}
            />
            <HTMLView
              id={data.id}
              name={data.name}
              htmlView={data.htmlView}
              key={data.index}
            />
            {/* <ModalPopup
              id={data.id}
              name={data.name}
              copyHTMLCode={data.htmlData}
              copyCSSCode={data.copyCSSCode}
              key={data.index}
            /> */}
            {/* <BlobHandler
              getDataFromHTMLString={data.getDataFromHTMLString}
            ></BlobHandler> */}
          </div>
        ))}
      </div>

        </>
    )
}
export { NameIndex };

// import React, { useState } from "react";

// function NameIndex({ onSelect }) {
//   // Function to handle sample selection
//   const handleSampleSelection = (html) => {
//     onSelect(html); // Pass the selected HTML back to the parent component
//   };

//   return (
//     <>
//       {NameData.map((data, index) => (
//         <div className="cmp-row" key={index}>
//           <TitleBar
//             id={data.id}
//             name={data.name}
//             skinCode={skinCodes[index]}
//             priority={1}
//             originalSkin={originalSkin[index]}
//           />
//           <HTMLView
//             id={data.id}
//             name={data.name}
//             htmlView={data.htmlView}
//           />
//           <button onClick={() => handleSampleSelection(data.htmlView)}>
//             Select Sample
//           </button>
//         </div>
//       ))}
//     </>
//   );
// }

// export { NameIndex };
