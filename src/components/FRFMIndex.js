import React, {useState} from 'react';
import { ModalPopup } from 'Components/ModalPopup';
import { HTMLView } from 'Components/HTMLView';
import { TitleBar } from 'Components/TitleBar';
import { generateData } from "Components/generateData"
import { useEffect } from 'react';
import { BlobHandler } from 'Components/blobHandler';
import {useLoading} from 'Components/SkinContext';


let label = 'FRFM'
let skinCodes = ['SM01', 'SM02', 'SM03', 'AC01', 'AC02','AC03', 'AC04', 'AC05'];
let originalSkin = ['MLS1', 'MLV6', 'HDR2', 'MLS1', 'MLS2', 'MLM3', 'MLS7', 'HDR2'];
export let skinFrfmLength = skinCodes.length;
// const FRFMData = await generateData(skinCodes, label);
function FRFMIndex() {
    const {updateLoading} = useLoading();
    const [FRMFData, setFRFMData] = useState([]);
    useEffect(() => {
        updateLoading(true);
        generateData(skinCodes, label)
        .then((data) => {
            updateLoading(false);
            setFRFMData(data)
        })
        .catch((err) => console.log("err" + err));
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div id="FRFM">
                {FRMFData.map((data, index) =>
                    <div className='cmp-row'>
                        <TitleBar id={data.id} name={data.name} key={data.index} skinCode={skinCodes[index]}
              priority={5} originalSkin={originalSkin[index]} />
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
export { FRFMIndex };