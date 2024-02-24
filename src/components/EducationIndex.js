import React from 'react';
import { useEffect, useState } from 'react';
import { renderToString } from 'react-dom/server'
import { generateData } from "Components/generateData";
import { ModalPopup } from 'Components/ModalPopup';
import { HTMLView } from 'Components/HTMLView';
import { TitleBar } from 'Components/TitleBar';
import { BlobHandler } from 'Components/blobHandler';
import {useLoading} from 'Components/SkinContext';

let label = 'Education';
let skinCodes = ['E001', 'E002', 'E003', 'E004', 'E005', 'E006', 'E007', 'E008', 'E009', 'E010', 'E011', 'E012', 'E013', 'E014', 'E015', 'E016', 'E017', 'E018', 'E019', 'E020', 'E021'];
let originalSkin = ['CBG2', 'MLS2', 'MLT6', 'MLM3', 'MLS5', 'MLS6', 'MLS7', 'MLS8', 'MLS9', 'MLV1', 'MLV3', 'MLV4' , 'MLV5', 'MLV9', 'MLW5', 'MLW6', 'MLW7', 'MLW9', 'CNT1', 'CNT3', 'HDR2'];
export let skinEducLength = skinCodes.length;
// let EducData = await generateData(skinCodes, label);

function EducationIndex() {
    const {updateLoading} = useLoading();
    const [EducData, setEducData] = useState([])
    useEffect(() => {
        updateLoading(true);
    generateData(skinCodes, label)
      .then((data) => {
        updateLoading(false);
        setEducData(data);
      })
      .catch((err) => console.log("Err", err));
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div id="education">
                {EducData.map((data, index) =>
                    <div className='cmp-row'>
                        <TitleBar id={data.id} name={data.name} key={data.index} skinCode={skinCodes[index]}
              priority={7} originalSkin={originalSkin[index]} />
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
export { EducationIndex };
