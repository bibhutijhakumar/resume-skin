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
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes, faEye } from '@fortawesome/free-solid-svg-icons'
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
import jsPDF from "jspdf";//for pdf genrator
import html2canvas from "html2canvas";//for pdf genrator

export default function App() {
   let skinCD = "C001";
  const [showSidebar, setShowSidebar] = useState(false); //state to control sidebar visibility
  const [selectedHTML, setSelectedHTML] = useState(""); // State to store selected HTML
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  //const [templplateview, setTemplplateview] = useState(false); //state to control template view visibility
  const [tempview,settempview]=useState(false);
  // const[skinCD,setSkinCD]=useState("C001");

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
    }, 1000); // Adjust the delay as needed or remove this setTimeout for real loading process

    return () => clearTimeout(timer);
  }, []);
  
  // const toggleSidebar = () => {
  //   setShowSidebar(!showSidebar);
  // };
  
  //logic for pdf genrator
  const generatePDF = () => {
    if(tempview){
      setTimeout(() => {
        html2canvas(document.getElementById("tempview")).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();
          const imgHeight = (canvas.height * 210) / canvas.width;
          pdf.addImage(imgData, 0, 0, 210, imgHeight);
          pdf.save("resume.pdf");
        });     
      }, 500);
    }
  };

  return (
    <div>
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
              <button style={{cursor:"pointer",background:"#101F33",color:"white",borderRadius:"10px"}} 
                 onClick={() => {
                  setShowSidebar(!showSidebar); 
                }}>
                Toggle</button>
              
               <div className="cmp-container">
                {/* Sidebar conditionally rendered based on showSidebar state  */}
                {/* {showSidebar && <Sidebar />} Render sidebar based on showSidebar state */}
                {showSidebar?<Sidebar />:null} 
                 
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
                <button style={{height:"30px",cursor:"pointer",background:"#101F33",color:"white",borderRadius:"10px"}}
                 onClick={()=>
                   settempview(!tempview)}>View</button>
                {tempview?
                  <div className="shallow-document" id="tempview">
                    <div className="temp-view">Template View</div>
                    {selectedHTML && (
                      <div dangerouslySetInnerHTML={{ __html: selectedHTML }} />
                    )}
                    <GetTemplateFromBlob />
                  </div>
                  :null
                }
                <button
                    style={{ height: "30px", cursor: "pointer", background: "#101F33", color: "white",gap:"10px" ,borderRadius:"10px"}}
                    onClick={generatePDF}
                  >Download PDF</button>
              </div>
            </Router>
          )}
        </div>
      </SkinProvider>
      
    </ShallowDocumentVisibilityProvider>
  </div>
  );
}


