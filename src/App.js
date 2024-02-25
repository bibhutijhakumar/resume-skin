// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { ContactIndex } from "./components/ContactIndex";
// import { EducationIndex } from "./components/EducationIndex";
// import { ExperienceIndex } from "./components/ExperienceIndex";
// import { LnggIndex } from "./components/LnggIndex";
// import { SkliIndex } from "./components/SkliIndex";
// import { NameIndex } from "./components/NameIndex";
// import { HeaderIndex } from "./components/HeaderIndex";
// import Sidebar from "Components/Sidebar";
// import InitialLoader from "./common-components/InitialLoader";
// import { FRFMIndex } from "./components/FRFMIndex";
// import { AdditionalLinkIndex } from "./components/AdditionalLinkIndex";
// import { HILTIndex } from "./components/HILTIndex";
// import { SignIndex } from "./components/SignatureIndex";
// import { TemplateIndex } from "./components/TemplateIndex";
// import GetTemplateFromBlob from "Components/getTemplateFromBlob";
// import { SkinProvider } from "Components/SkinContext";

// import { useLoading } from "Components/SkinContext";
// import { ShallowDocumentVisibilityProvider } from "./common-components/ShallowDocumentVisibilityProvider";
// export default function App() {
//   let skinCD = "C001";
//   const [selectedHTML, setSelectedHTML] = useState(''); // State to store selected HTML

//   // Function to append generated HTML to shallow-document class
//   const appendHTMLToShallowDocument = (html) => {
//     setSelectedHTML(html);
//   };
//   const { loading, updateLoading } = useLoading();
//   console.log("UPdatea  updateLoading(true);", updateLoading);

//   console.log("LOAding ", loading);
//   return (
//     <ShallowDocumentVisibilityProvider>
//     <SkinProvider>
//       <InitialLoader />
//       <div className={`${loading ? "disabled" : ""}`}>
//         <Router basename={"/"}>
//           <div className="cmp-container">
//             {/* Side bar content */}
//             <Sidebar />

//             {/* Main section components with routing */}
//             <div className="cmp-document">
//               <Routes>
//                 <Route index path="/cmp/name" element={<NameIndex />}></Route>
//                 <Route path="/cmp/contact" element={<ContactIndex />}></Route>
//                 <Route
//                   path="/languageinfographic"
//                   element={<LnggIndex />}
//                 ></Route>
//                 <Route path="/experience" element={<ExperienceIndex />}></Route>
//                 <Route path="/education" element={<EducationIndex />}></Route>
//                 <Route path="/cmp/header" element={<HeaderIndex />}></Route>
//                 <Route path="/skillinfographic" element={<SkliIndex />}></Route>
//                 <Route path="/alink" element={<AdditionalLinkIndex />}></Route>
//                 <Route path="/hilt" element={<HILTIndex />}></Route>
//                 <Route path="/frfm" element={<FRFMIndex />}></Route>
//                 <Route path="/signature" element={<SignIndex />}></Route>
//                 <Route path="/cmp/template" element={<TemplateIndex appendHTMLToShallowDocument={appendHTMLToShallowDocument} />} />
//                 <Route
//                   path="/"
//                   element={<Navigate to={"/cmp/template"} replace />}
//                 ></Route>
//                 <Route
//                   path="/*"
//                   element={<Navigate to={"/cmp/template"} replace />}
//                 ></Route>
//               </Routes>
//             </div>

//             <div className="shallow-document">
//               <div className="temp-view">Template View</div>
//               {selectedHTML && <div dangerouslySetInnerHTML={{ __html: selectedHTML }} />}
//               <GetTemplateFromBlob />
//             </div>
//           </div>
//         </Router>
//       </div>
//     </SkinProvider>
//     </ShallowDocumentVisibilityProvider>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
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
  const [showSidebar, setShowSidebar] = useState(false); //state to control sidebar visibility
  const [selectedHTML, setSelectedHTML] = useState(""); // State to store selected HTML
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const [templplateview, setTemplplateview] = useState(false); //state to control template view visibility

  // Function to append generated HTML to shallow-document class
  const appendHTMLToShallowDocument = (html) => {
    setSelectedHTML(html);
    setTemplateViewVisible(true); // Set the visibility of the template view
  };
  const { loading, updateLoading } = useLoading();
  console.log("UPdatea  updateLoading(true);", updateLoading);

  console.log("LOAding ", loading);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed or remove this setTimeout for real loading process

    return () => clearTimeout(timer);
  }, []);
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  

  return (
    <ShallowDocumentVisibilityProvider>
      <SkinProvider>
        <InitialLoader />
        <div className={`${isLoading ? "loading-message" : ""}`}>
          {isLoading ? (
            <>
              <div className="spinner" />
              Loading Templates & Sections...
            </>
          ) : (
            <Router basename={"/"}>
              <button onClick={()=>setShowSidebar(!showSidebar)}>Toggle</button>
              <div className="cmp-container">
                {/* Sidebar conditionally rendered based on showSidebar state  */}
                {showSidebar && <Sidebar />} {/* Render sidebar based on showSidebar state */}
                {/* {showSidebar?<Sidebar />:null} */}
                 
                {/* Main section components with routing */}
                <div className="cmp-document">
                  {isLoading ? (
                    <div className="loading-message">
                      Loading Templates & Sections...
                    </div>
                  ) : (
                    <Routes>
                      <Route index path="/cmp/name" element={<NameIndex />} />
                      <Route
                        path="/cmp/contact"
                        element={<ContactIndex />}
                      />
                      <Route
                        path="/languageinfographic"
                        element={<LnggIndex />}
                      />
                      <Route
                        path="/experience"
                        element={<ExperienceIndex />}
                      />
                      <Route
                        path="/education"
                        element={<EducationIndex />}
                      />
                      <Route
                        path="/cmp/header"
                        element={<HeaderIndex />}
                      />
                      <Route
                        path="/skillinfographic"
                        element={<SkliIndex />}
                      />
                      <Route path="/alink" element={<AdditionalLinkIndex />} />
                      <Route path="/hilt" element={<HILTIndex />} />
                      <Route path="/frfm" element={<FRFMIndex />} />
                      <Route path="/signature" element={<SignIndex />} />
                      <Route
                        path="/cmp/template"
                        element={
                          <TemplateIndex
                            appendHTMLToShallowDocument={
                              appendHTMLToShallowDocument
                            }
                            //  onClick={()=>setShowSidebar(true)} sourav
                            // toggleSidebar={() => setShowSidebar(true)}// Pass function to toggle sidebar visibility
                            // toggleSidebar={() => setShowSidebar(true)}// Pass function to toggle sidebar visibility
                          />
                        }
                      />
                      <Route
                        path="/"
                        element={<Navigate to={"/cmp/template"} replace />}
                      />
                      <Route
                        path="/*"
                        element={<Navigate to={"/cmp/template"} replace />}
                      />
                    </Routes>
                  )}
                </div>

                {templplateview && ( /* This will hide temp-view when templplateview is false */
                  <div className="shallow-document">
                    <div className="temp-view">Template View</div>
                    {selectedHTML && (
                      <div dangerouslySetInnerHTML={{ __html: selectedHTML }} />
                    )}
                    <GetTemplateFromBlob />
                  </div>
                )}
              </div>
            </Router>
          )}
        </div>
      </SkinProvider>
    </ShallowDocumentVisibilityProvider>
  );
}

// import React, { useState } from "react";
// import  TemplateIndex  from "./components/TemplateIndex";
// import Sidebar from "./common-components/Sidebar";

// export default function App() {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [samplesData, setSamplesData] = useState([]);

//   return (
//     <div>
//       {/* Pass showSidebar state and samples data to Sidebar component */}
//       <Sidebar showSidebar={showSidebar} samplesData={samplesData} />
//       {/* Pass toggleSidebar function to TemplateIndex component */}
//       <TemplateIndex toggleSidebar={setShowSidebar} setSamplesData={setSamplesData} />
//     </div>
//   );
// }
