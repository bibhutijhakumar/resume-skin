import { RendrererSkin } from "Components/RendererSkin";
import { resolveCall } from "Components/contentModalPopup";
import { useLoading } from "Components/SkinContext";

export const fetchData = async (skinCode) => {
  const rawData = await resolveCall(skinCode);
  return {
    css: rawData.css,
    html: rawData.html,
    getDataFromHTMLString: rawData.getDataFromHTMLString,
  };
};

export let generateData = async (skinCodes, label) => {
  let finalData = await Promise.all(
    skinCodes.map(async (skinCode, index) => {
      let { css, html, getDataFromHTMLString } = await fetchData(skinCode);
      let isMultiColumnSkin = false;
      // Additional logic to determine isMultiColumnSkin based on skinCode
      if (skinCode.startsWith("H0")) {
        isMultiColumnSkin = true;
      }
      // console.log(a)

      return {
        id: index + 1,
        name: label,
        copyCSSCode: css,
        htmlView: (
          <RendrererSkin
            skinCD={skinCode}
            isMultiColumnSkin={isMultiColumnSkin}
          />
        ),
        htmlData: html,
        getDataFromHTMLString: getDataFromHTMLString,
      };
    })
  );

  console.log("FINAL DARTA", finalData);

  return finalData;
};
