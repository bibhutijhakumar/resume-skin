import React, {useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { generateData } from "Components/generateData";
import { useLoading, useTemplate } from "Components/SkinContext";

export const TitleBar = (props) => {
  const { updateLoading } = useLoading();
  const { template, addTemplate } = useTemplate();
  const [selected, setSelected] = useState(null); // State to keep track of the selected component

  // Function to handle the selection of a component
  const handleSelect = (event) => {
    const selectedId = event.target.value;
    setSelected(selectedId); // Update the selected state with the value of the clicked radio button

    // Get the selected skin code
    const selectedData = generateData([selectedId], ""); // Assuming generateData returns an array with a single item
    const selectedSkinCode = selectedData[0]?.skinCD;

    // Log the selected skin code in the console
    console.log("Selected Skin Code:", selectedSkinCode);

    useEffect(() => {
        updateLoading(true);
        selectedSkinCode
      .then(() => {
        selectedSkinCode
        updateLoading(false);
      })
      .catch((err) => {
        console.log("Err", err);
      });
        window.scrollTo(0, 0)
    }, [])
  };
  console.log("Examole data", props);

  async function handleClick() {
    console.log("PRops received in Title bar after click", props);
    updateLoading(true);

    try {
      // Add the template to the context
      await addTemplate(props.priority, props.skinCode);
      console.log("Template added to context:", template);
      props.appendHTMLToShallowDocument(props.htmlView);

    } catch (error) {
      console.error("Error adding template to context:", error);
    }
    finally {
      updateLoading(false);
    }

    
  }
  
  console.log("Selected template 123 in title after updation ", template);

  return (
    <div>
      <h4 className="cmp-title temp-page">
        <div className="cmp-wrap">
          <span>
            {props.name} Sample {props.id}
          </span>
          <Tooltip title={props.originalSkin} arrow placement="right">
            <IconButton>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
        <label htmlFor={props.id} onClick={() => handleClick()}>
          select
        </label>
        {/* <button
          type="button"
          className="cmp-button"
          data-bs-toggle="modal"
          data-bs-target={`#${props.name}${props.id}`}
        >
          {"</>"}
        </button> */}
      </h4>
    </div>
  );
};
