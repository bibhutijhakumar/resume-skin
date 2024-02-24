import React, { useState, useEffect } from "react";
import { useSkin } from "Components/SkinContext";
async function postData(url, data) {
  updateLoading(true);
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  updateLoading(false);
  return response.json();
}

async function fetchHtmlContent(url) {
  updateLoading(true);
  const response = await fetch(url);
  if (response.status !== 200) {
    updateLoading(false);
    throw new Error(`${url} does not exist`);
  }
  updateLoading(false);
  return response.text();
}

async function sendUpdatedDataToBlob(filePath, data) {
  const updateUrl =
    "http://api-dev-rex.cloudapp.net/v1/componentization/update";
  const additionalContent = data;
  const getMeTheNewData = additionalData(data, additionalContent);
  console.log(getMeTheNewData);

  try {
    updateLoading(true);
    const response = await fetch(updateUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ FilePath: filePath, Data: getMeTheNewData }),
    });
    updateLoading(false);
    return response;
  } catch (error) {
    updateLoading(false);
    console.error(error);
  }
}

function additionalData(data, additionalContent) {
  // This needs to be refined. Data is sent twice to blob so for now we have remove 'data' variable but the approach is wrong.
  let thisShouldComeFromTemplate = additionalContent;
  return thisShouldComeFromTemplate;
}

function BlobHandler(getDataFromHTMLString) {
  const [createdUrl, setCreatedUrl] = useState(null);
  const [manipulatedHtml, setManipulatedHtml] = useState("");
  const { skinCD, updateSkinCD } = useSkin();
  const handleChange = (event) => {
    setHtmlString(event.target.value);
  };

  const handleData = async () => {
    try {
      const createUrl = createdUrl || (await createHtmlUrl());
      console.log(createUrl);
      setCreatedUrl(createUrl); // Update the state

      const htmlContentText = await fetchHtmlContent(createUrl);

      const additionalContent =
        getDataFromHTMLString && getDataFromHTMLString.getDataFromHTMLString
          ? getDataFromHTMLString.getDataFromHTMLString
          : "";

      const updatedHtml = additionalData(htmlContentText, additionalContent);
      updateSkinCD("C004");
      setManipulatedHtml(updatedHtml);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (createdUrl && manipulatedHtml) {
      sendUpdatedDataToBlob(createdUrl, manipulatedHtml);
    }

    return () => {
      console.log("Effect cleanup (component unmounted)");
    };
  }, [createdUrl, manipulatedHtml]);

  const createHtmlUrl = async () => {
    const urlResponse = await postData(
      "http://api-dev-rex.cloudapp.net/v1/componentization/create?filename=C001",
      { Data: "" }
    );
    return urlResponse;
  };
  return (
    <div>
      <button onClick={handleData}>Send Data to Blob</button>
    </div>
  );
}

export { BlobHandler };
