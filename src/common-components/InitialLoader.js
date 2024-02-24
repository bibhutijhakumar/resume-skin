import SpinnerComponent from "./SpinnerComponent";
import { useLoading } from "Components/SkinContext";

export default function InitialLoader(props) {
  const { loading, updateLoading } = useLoading();

  const isIPAD = () => {
    return (
      navigator.userAgent.match(/iPad/i) ||
      (navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 2 &&
        /MacIntel/.test(navigator.platform))
    );
  };

  const setSkinsHtml = (skinName) => {
    const skinPath =
      "https://configservicestoragetest.blob.core.windows.net/livecareerrepository/";
    const url = `${skinPath}${skinName}`;

    if (!window.RDL.files.hasOwnProperty(skinName)) {
      updateLoading(true);
      callAjax(url, "GET", false, false, (data) => {
        updateLoading(false);
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, "text/html");
        window.RDL.files[skinName] = htmlDoc;

        console.log("Sppiner will come here", loading);
        console.log("Update flase", loading);
      });
    }
  };

  const callAjax = (
    url,
    method,
    async,
    withCredentials,
    callback,
    resolve,
    data,
    isskipTimestamp,
    isResolveOnFailure
  ) => {
    console.log("TEUW", loading);
    const xmlhttp = new XMLHttpRequest();

    if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
      alert("File not reachable");
    } else {
      xmlhttp.onload = () => {
        console.log("XML SSSTUS", xmlhttp);

        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          if (callback) {
            if (resolve) {
              callback(xmlhttp.responseText, resolve);
            } else {
              callback(xmlhttp.responseText);
            }
          }
        } else {
          if (isResolveOnFailure && callback) {
            callback();
          }
        }
      };

      if (method === "GET" && !isskipTimestamp) {
        // <SpinnerComponent />;

        url = `${url}${url.includes("?") ? "&" : "?"}v=${new Date().getTime()}`;
      }
      xmlhttp.open(method, url, async);
      if (withCredentials) {
        xmlhttp.withCredentials = true;
      }

      if (data) {
        xmlhttp.setRequestHeader(
          "Content-Type",
          "application/json;charset=UTF-8"
        );
        xmlhttp.send(data);
      } else {
        xmlhttp.send();
      }

      xmlhttp.onerror = (_err) => {
        if (isResolveOnFailure && callback) {
          callback();
        }
      };
      xmlhttp.ontimeout = (_e) => {
        if (isResolveOnFailure && callback) {
          callback();
        }
      };
    }
  };

  window.isIPAD = isIPAD;
  window.setSkinsHtml = setSkinsHtml;
  window.RDL = {};
  window.RDL.files = {};

  // return null;
  return <SpinnerComponent />;
}
