// import React, { useRef, useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { skinCntcLength } from '../components/ContactIndex';
// import { skinEducLength } from "../components/EducationIndex";
// import { skinExprLength } from "../components/ExperienceIndex";
// import { skinLnggLength } from "../components/LnggIndex";
// import { skinSkliLength } from "../components/SkliIndex"
// import { skinNameLength } from "../components/NameIndex";
// import { skinHeaderLength } from "../components/HeaderIndex";
// import { skinFrfmLength } from "../components/FRFMIndex";
// import { skinAdditionalLength } from "../components/AdditionalLinkIndex";
// import { skinHiltLength } from "../components/HILTIndex";
// import { skinSignatureLength } from "../components/SignatureIndex";
// import { skinTemplateLength } from '../components/TemplateIndex';
// import { IconButton } from '@mui/icons-material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
// import TitleIcon from '@mui/icons-material/Title';
// import ImportContactsIcon from '@mui/icons-material/ImportContacts';
// import InsertLinkIcon from '@mui/icons-material/InsertLink';
// import ListAltIcon from '@mui/icons-material/ListAlt';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import ExplicitIcon from '@mui/icons-material/Explicit';
// import GTranslateIcon from '@mui/icons-material/GTranslate';
// import AccountTreeIcon from '@mui/icons-material/AccountTree';
// import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

// function Sidebar() {
//   const Sections = [
//     { "name": "Choose Template", "path": "cmp/template", "icon": <AccountBalanceIcon /> },
//     { "name": "Header", "path": "cmp/header", "import": skinHeaderLength,"icon": <TitleIcon /> }, 
//     { "name": "Name", "path": "cmp/name", "import": skinNameLength,  "icon": <DynamicFeedIcon /> },
//     { "name": "Contact", "path": "cmp/contact", "import": skinCntcLength, "icon": <ImportContactsIcon /> },
//     { "name": "Additional Link", "path": "/alink", "import": skinAdditionalLength, "icon": <InsertLinkIcon /> },
//     { "name": "Free Form", "path": "/frfm", "import": skinFrfmLength, "icon": <ListAltIcon /> },
//     { "name": "Education", "path": "/education", "import": skinEducLength, "icon": <MenuBookIcon /> },
//     { "name": "Work Experience", "path": "/experience", "import": skinExprLength, "icon": <ExplicitIcon /> },
//     { "name": "Language Infographic", "path": "/languageinfographic", "import": skinLnggLength, "icon": <GTranslateIcon /> },
//     { "name": "Skill Infographic", "path": "/skillinfographic", "import": skinSkliLength, "icon": <AccountTreeIcon /> },
//     { "name": "Skills", "path": "/hilt", "import": skinHiltLength, "icon": <AccountTreeIcon /> },
//     { "name": "Signature", "path": "/signature", "import": skinSignatureLength, "icon": <DriveFileRenameOutlineIcon /> } 
//   ]

//   return (
//     <div className="cmp-sidebar sidebar">
//       <ul>
//         {Sections.map((data, index) => {
//           return (
//             <li key={index} className='sidebar-position'>
//               <NavLink activeClassName="active" to={data.path}>
//                 {data.icon}
//                 <span className='name'>{data.name}</span>
//                 <span className='count'>{data.import}</span>
//               </NavLink>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import TitleIcon from '@mui/icons-material/Title';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExplicitIcon from '@mui/icons-material/Explicit';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

function Sidebar({ showSidebar, samplesData }) {
  const Sections = [
    { "name": "Choose Template", "path": "cmp/template", "icon": <AccountBalanceIcon /> },
    { "name": "Header", "path": "cmp/header", "import": samplesData?.headerLength, "icon": <TitleIcon /> }, 
    { "name": "Name", "path": "cmp/name", "import": samplesData?.nameLength, "icon": <DynamicFeedIcon /> },
    { "name": "Contact", "path": "cmp/contact", "import": samplesData?.contactLength, "icon": <ImportContactsIcon /> },
    { "name": "Additional Link", "path": "/alink", "import": samplesData?.additionalLinkLength, "icon": <InsertLinkIcon /> },
    { "name": "Free Form", "path": "/frfm", "import": samplesData?.freeFormLength, "icon": <ListAltIcon /> },
    { "name": "Education", "path": "/education", "import": samplesData?.educationLength, "icon": <MenuBookIcon /> },
    { "name": "Work Experience", "path": "/experience", "import": samplesData?.workExperienceLength, "icon": <ExplicitIcon /> },
    { "name": "Language Infographic", "path": "/languageinfographic", "import": samplesData?.languageInfographicLength, "icon": <GTranslateIcon /> },
    { "name": "Skill Infographic", "path": "/skillinfographic", "import": samplesData?.skillInfographicLength, "icon": <AccountTreeIcon /> },
    { "name": "Skills", "path": "/hilt", "import": samplesData?.skillsLength, "icon": <AccountTreeIcon /> },
    { "name": "Signature", "path": "/signature", "import": samplesData?.signatureLength, "icon": <DriveFileRenameOutlineIcon /> } 
  ];

  return (
    <div className={`cmp-sidebar sidebar ${showSidebar ? 'open' : ''}`}>
      <ul>
        {Sections.map((data, index) => {
          return (
            <li key={index} className='sidebar-position'>
              <NavLink activeClassName="active" to={data.path}>
                {data.icon}
                <span className='name'>{data.name}</span>
                {data.import !== undefined && <span className='count'>{data.import}</span>}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
