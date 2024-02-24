// import {SkillData } from './SkillData'
import { ModalPopup } from 'Components/ModalPopup';
import { HTMLView } from 'Components/HTMLView';
import { TitleBar } from 'Components/TitleBar';
import { generateData } from "Components/generateData";
import { useEffect } from 'react';
import { BlobHandler } from 'Components/blobHandler';
import { useLoading } from '../common-components/SkinContext';
import {useState} from 'react';

let label = 'Skill';
let skinCodes = ['S001','S004','S002','S005','S003','S006','S007','S008','S009','S010','S011','S012','S013'];
let originalSkin = ['MLS1','SLI1','CBG1','MLI2','MLS3','MLI5','TML4','MLV5','MLV6','MLV4','MLW5','CBG2','MLM3'];
export let skinSkliLength = skinCodes.length;
let SkillData = await generateData(skinCodes, label);
function SkliIndex() {
    const {updateLoading} = useLoading();
    const [SkillData, setSkillData] = useState([]);
    useEffect(() => {
        updateLoading(true)
        generateData(skinCodes, label)
        .then((data) => {
            updateLoading(false)
            setSkillData(data)
        })
        .catch((err) => console.log("Err" + err));
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div id="skill">
                {SkillData.map((data, index) =>
                    <>
                        <div className='cmp-row'>
                            <TitleBar id={data.id} name={data.name} key={data.index} skinCode={skinCodes[index]}
              priority={10} originalSkin={originalSkin[index]} />
                            <HTMLView id={data.id} name={data.name} htmlView={data.htmlView} key={data.index} />
                            <ModalPopup id={data.id} name={data.name} copyHTMLCode={data.htmlData} copyCSSCode={data.copyCSSCode} key={data.index} />
                            {/* <BlobHandler getDataFromHTMLString={data.getDataFromHTMLString} ></BlobHandler> */}

                        </div>
                    </>
                )}
            </div>
        </>
    );
}
export { SkliIndex };


