import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ContactIndex } from "./components/ContactIndex";
import { EducationIndex } from "./components/EducationIndex";
import { ExperienceIndex } from "./components/ExperienceIndex";
import { LnggIndex } from "./components/LnggIndex";
import { SkliIndex } from "./components/SkliIndex";
import { NameIndex } from "./components/NameIndex";
import { HeaderIndex } from "./components/HeaderIndex";
import Sidebar from "Components/Sidebar";
import InitialLoader from "./common-components/InitialLoader";
import { FRFMIndex } from "./components/FRFMIndex";
import { AdditionalLinkIndex } from "./components/AdditionalLinkIndex";
import { HILTIndex } from "./components/HILTIndex";
import { SignIndex } from "./components/SignatureIndex";
import { TemplateIndex } from "./components/TemplateIndex";
import GetTemplateFromBlob from "Components/getTemplateFromBlob";
import { SkinProvider } from "Components/SkinContext";

import { useLoading } from "Components/SkinContext";
import { ShallowDocumentVisibilityProvider } from "./common-components/ShallowDocumentVisibilityProvider";
export default function App() {
  let skinCD = "C001";
  const [selectedHTML, setSelectedHTML] = useState(''); // State to store selected HTML

  // Function to append generated HTML to shallow-document class
  const appendHTMLToShallowDocument = (html) => {
    setSelectedHTML(html);
  };
  const { loading, updateLoading } = useLoading();
  console.log("UPdatea  updateLoading(true);", updateLoading);

  console.log("LOAding ", loading);
  return (
    <ShallowDocumentVisibilityProvider>
    <SkinProvider>
      <InitialLoader />
      <div className={`${loading ? "disabled" : ""}`}>
        <Router basename={"/"}>
          <div className="cmp-container">
            {/* Side bar content */}
            <Sidebar />

            {/* Main section components with routing */}
            <div className="cmp-document">
              <Routes>
                <Route index path="/cmp/name" element={<NameIndex />}></Route>
                <Route path="/cmp/contact" element={<ContactIndex />}></Route>
                <Route
                  path="/languageinfographic"
                  element={<LnggIndex />}
                ></Route>
                <Route path="/experience" element={<ExperienceIndex />}></Route>
                <Route path="/education" element={<EducationIndex />}></Route>
                <Route path="/cmp/header" element={<HeaderIndex />}></Route>
                <Route path="/skillinfographic" element={<SkliIndex />}></Route>
                <Route path="/alink" element={<AdditionalLinkIndex />}></Route>
                <Route path="/hilt" element={<HILTIndex />}></Route>
                <Route path="/frfm" element={<FRFMIndex />}></Route>
                <Route path="/signature" element={<SignIndex />}></Route>
                <Route path="/cmp/template" element={<TemplateIndex appendHTMLToShallowDocument={appendHTMLToShallowDocument} />} />
                <Route
                  path="/"
                  element={<Navigate to={"/cmp/template"} replace />}
                ></Route>
                <Route
                  path="/*"
                  element={<Navigate to={"/cmp/template"} replace />}
                ></Route>
              </Routes>
            </div>

            <div className="shallow-document">
              <div className="temp-view">Template View</div>
              {selectedHTML && <div dangerouslySetInnerHTML={{ __html: selectedHTML }} />}
              <GetTemplateFromBlob />
            </div>
          </div>
        </Router>
      </div>
    </SkinProvider>
    </ShallowDocumentVisibilityProvider>
  );
}
