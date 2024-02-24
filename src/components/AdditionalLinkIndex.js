import React, {useState} from 'react';
import { useEffect } from 'react';
import { ModalPopup } from 'Components/ModalPopup';
import { HTMLView } from 'Components/HTMLView';
import { TitleBar } from 'Components/TitleBar';
import { generateData } from "Components/generateData"
import { BlobHandler } from 'Components/blobHandler';
import { useLoading } from "Components/SkinContext";

let label = 'AdditionalLink';
let skinCodes = ['A001', 'A002', 'A003', 'A004', 'A005'];
let originalSkin = ['MLS1', 'MLI2', 'MLM3', 'MLS7', 'SLI1'];
export let skinAdditionalLength = skinCodes.length;
// const AdditionalLinkData = await generateData(skinCodes, label);

function AdditionalLinkIndex() {
    const { updateLoading } = useLoading();
    const [AdditionalLinkData, setAdditionalLinkData] = useState([]);
    useEffect(() => {
        updateLoading(true);
    generateData(skinCodes,     )
      .then((data) => {
        setAdditionalLinkData(data);
        updateLoading(false);
      })
      .catch((err) => {
        console.log("Err", err);
      });
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div id="alink">
                {AdditionalLinkData.map((data, index) =>
                    <div className='cmp-row'>
                        <TitleBar id={data.id} name={data.name} key={data.index} skinCode={skinCodes[index]}
              priority={3} originalSkin={originalSkin[index]} />
                        <HTMLView id={data.id} name={data.name} htmlView={data.htmlView}
                            key={data.index} />
                        <ModalPopup id={data.id} name={data.name} copyHTMLCode={data.htmlData} copyCSSCode={data.copyCSSCode} key={data.index} />
                        {/* <BlobHandler getDataFromHTMLString={data.getDataFromHTMLString} ></BlobHandler> */}

                    </div>
                )}
            </div>

        </>
    )
}
export { AdditionalLinkIndex };