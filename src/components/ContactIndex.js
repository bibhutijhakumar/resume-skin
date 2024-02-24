import { renderToString } from 'react-dom/server';
import { ModalPopup } from 'Components/ModalPopup';
import { HTMLView } from 'Components/HTMLView';
import { TitleBar } from 'Components/TitleBar';
import { generateData } from "Components/generateData";
import { useEffect } from 'react';
import { BlobHandler } from 'Components/blobHandler';
import { useLoading } from '../common-components/SkinContext';
import { useState } from "react";

let label = 'Contact';
let skinCodes = ['C004', 'C005', 'C001', 'C003', 'C002','C006','C007','C008','C009','C010'];
export let skinCntcLength = skinCodes.length;
let originalSkin = ['MLS6', 'MLS7', 'MLS1', 'MLS3', 'MLS2','MLS8','MLV1','MLT6','MLI2','MLI5'];
// let ContactData = await generateData(skinCodes, label);

function ContactIndex() {
    const { updateLoading } = useLoading();
    const [ContactData, setContactData] = useState([]);
    useEffect(() => {
      updateLoading(true);
      generateData(skinCodes, label)
        .then((data) => {
          updateLoading(false);
          setContactData(data);
        })
        .catch((err) => {
          console.log(err);
        });
      window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div id="contact">
                {ContactData.map((data, index) =>
                  <>
                    <div className="cmp-row">
                      <TitleBar
                        id={data.id}
                        name={data.name}
                        key={data.index}
                        skinCode={skinCodes[index]}
                        priority={2}
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
                )}
            </div>

        </>
    )
}
export { ContactIndex };    