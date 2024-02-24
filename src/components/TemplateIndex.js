import { useEffect, useState } from 'react';
import { HTMLView } from 'Components/HTMLView';
import { TitleBar } from 'Components/TitleBar';
import { useLoading } from '../common-components/SkinContext';

function TemplateIndex(props) {
    const [skins, setSkins] = useState([]);
    const {updateLoading} = useLoading();

    useEffect(() => {
        updateLoading(true);
        const skinCodes = ['SMC1', 'SMC2', 'SMC3', 'SMC4', 'SMC5'];
        const fetchSkinData = async () => {
            const skinData = [];
            for (const skinCode of skinCodes) {
                try {
                    const response = await fetch(`https://configservicestoragetest.blob.core.windows.net/livecareerrepository/${skinCode}.htm`);
                    if (response.ok) {
                        const html = await response.text();
                        skinData.push({ skinCode, html });
                    } else {
                        console.error(`Failed to fetch HTML for skin ${skinCode}`);
                    }
                    updateLoading(false);
                } catch (error) {
                    console.error(`Error fetching HTML for skin ${skinCode}: ${error.message}`);
                    updateLoading(false);
                }
            }
            setSkins(skinData);
        };

        fetchSkinData();
    }, []);

    return (
        <>
            <div id="template" className='template'>
                {skins.map((skin, index) =>
                    <div className='cmp-row' key={`${skin.skinCode}-${index}`}>
                        <TitleBar
                            id={index + 1}
                            name={`choose template`}
                            skinCode={skin.skinCode}
                            htmlView={skin.html}
                            appendHTMLToShallowDocument={props.appendHTMLToShallowDocument}
                            />
                        <HTMLView name={`choose template${index+1}`} htmlView={skin.html} key={`html-${skin.skinCode}-${index}`} />
                    </div>
                )}

            </div>
        </>
    );
}

export { TemplateIndex };
