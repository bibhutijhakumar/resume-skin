import React, { useState } from "react";
import Renderer from "@license-admin/renderer";
import JSONData from "../JSONS/mprSampleJson.json";
import localization from "./localization.json";
import { useLoading } from "Components/SkinContext";

// import { setSkinsHtml } from "./InitialLoader";

const RendrererSkin = (props) => {
  const { updateLoading } = useLoading();

  const getTemplateFromSkin = (skin) => {
    let skinCD = skin || skinCD;
    setSkinsHtml(`${skinCD}` + ".htm");
    let template = window.RDL.files[skinCD + ".htm"];
    return template;
  };
  const assignRef = () => {};
  const onEdit = () => {};
  const openDeleteSectionsPopup = () => {};
  let document = JSONData;
  let documentScale = 1;
  let portalCd = "MPR";
  let Localization = localization;
  let isDragMove = true;
  let isPreviewState = false;
  let isPreviewOnly = false;
  let enableHover = true;
  let allowMultiHover = true;
  // let isMultiColumnSkin = false

  return (
    <>
      <div>
        <Renderer
          document={document}
          assignRef={assignRef}
          openDeleteSectionsPopup={openDeleteSectionsPopup}
          skinCD={props.skinCD}
          onEdit={onEdit}
          documentScale={documentScale}
          Localization={Localization}
          getTemplateFromSkin={getTemplateFromSkin}
          isPreviewOnly={isPreviewOnly}
          enableHover={enableHover}
          isDragMove={isDragMove}
          allowMultiHover={allowMultiHover}
          isPreviewState={isPreviewState}
          isMultiColumnSkin={props.isMultiColumnSkin}
          portalCd={portalCd}
          removeDependencyNodes
        />
      </div>
    </>
  );
};
export { RendrererSkin };
