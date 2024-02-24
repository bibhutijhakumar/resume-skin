import React, {useState} from 'react';
import { ModalPopup } from 'Components/ModalPopup';
import { HTMLView } from 'Components/HTMLView';
import { TitleBar } from 'Components/TitleBar';
import { generateData } from "Components/generateData"
import { useEffect } from 'react';
import { BlobHandler } from 'Components/blobHandler';
import { useLoading } from '../common-components/SkinContext';

let label = 'Skill'
let skinCodes = ['HL01', 'HL02', 'HL03', 'HL04', 'HL05', 'HL06', 'HL07'];
let originalSkin = ['MLS1', 'CBG2', 'MLT6', 'MLM3', 'MLS6', 'MLV6', 'HDR2']; 
export let skinHiltLength = skinCodes.length;
const HILTData = await generateData(skinCodes, label);
function HILTIndex() {
    const {updateLoading} = useLoading();
    const [HILTData, setHILTData] = useState([]);
    useEffect(() => {
        updateLoading(true);
        generateData(skinCodes, label)
        .then((data) => {
            updateLoading(false)
            setHILTData(data)
        })
        .catch((err) => console.log("Err" + err));
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div id="HILT">
                {HILTData.map((data, index) =>
                    <div className='cmp-row'>
                        <TitleBar id={data.id} name={data.name} key={data.index} skinCode={skinCodes[index]}
              priority={4} originalSkin={originalSkin[index]} />
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
export { HILTIndex };