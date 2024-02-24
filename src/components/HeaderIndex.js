import React, {useState} from 'react';
import { ModalPopup } from 'Components/ModalPopup';
import { HTMLView } from 'Components/HTMLView';
import { TitleBar } from 'Components/TitleBar';
import { generateData } from "Components/generateData"
import { useEffect } from 'react';
import { BlobHandler } from 'Components/blobHandler';
import {useLoading} from 'Components/SkinContext';

let label = 'Header'
let skinCodes = ['H001', 'H002', 'H003', 'H004', 'H005','H006','H007', 'H008', 'H009', 'H010', 'H011', 'H012', 'H013', 'H014', 'H015' ];
let originalSkin = ['MLS2', 'MLS7', 'MLS8', 'MLS9', 'MLV7','MLV2','MLS3', 'MLW4', 'MLW8', 'MLW9', 'MLW6', 'MLW7', 'MLD4', 'MLD5', 'MLD6'];
export let skinHeaderLength = skinCodes.length;
const HeaderData = await generateData(skinCodes, label);
function HeaderIndex() {
    const {updateLoading} = useLoading();
    const [HeaderData, setHeaderData] = useState([]);
    useEffect(() => {
        updateLoading(true)
        generateData(skinCodes, label)
        .then((data) => {
            updateLoading(false);
            setHeaderData(data)
        })
        .catch((err) => console.log("Err" + err));
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div id="header">
                {HeaderData.map((data, index) =>
                    <div className='cmp-row'>
                        <TitleBar id={data.id} name={data.name} key={data.index} skinCode={skinCodes[index]}
              priority={1} originalSkin={originalSkin[index]} />
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
export { HeaderIndex };