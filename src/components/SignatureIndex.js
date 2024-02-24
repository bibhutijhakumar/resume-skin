import React, {useState} from 'react';
import { ModalPopup } from 'Components/ModalPopup';
import { HTMLView } from 'Components/HTMLView';
import { TitleBar } from 'Components/TitleBar';
import { generateData } from "Components/generateData"
import { useEffect } from 'react';
import { BlobHandler } from 'Components/blobHandler';
import { useLoading } from '../common-components/SkinContext';

let label = 'Signature'
let skinCodes = ['D001', 'D002', 'D003'];
let originalSkin = ['MLS1', 'MLS2', 'MPR5'];
export let skinSignatureLength = skinCodes.length;
const SIGData = await generateData(skinCodes, label);
function SignIndex() {
    const {updateLoading} = useLoading();
    const [SIGData, setSIGData] = useState([]);
    useEffect(() => {
        updateLoading(true)
        generateData(skinCodes, label)
        .then((data) => {
            updateLoading(false)
            setSIGData(data)
        })
        .catch((err) => console.log("Err" + err));
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div id="SIGN">
                {SIGData.map((data, index) =>
                    <div className='cmp-row'>
                        <TitleBar id={data.id} name={data.name} key={data.index} skinCode={skinCodes[index]}
              priority={11} originalSkin={originalSkin[index]} />
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
export { SignIndex };