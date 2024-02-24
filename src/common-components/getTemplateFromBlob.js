import React, { useEffect, useState } from "react";
import { RendrererSkin } from "Components/RendererSkin";
import { useSkin, useTemplate } from "Components/SkinContext";

function GetTemplateFromBlob() {
  const { skinCD } = useSkin();
  const { template } = useTemplate();

  const [sortedData, setSortedData] = useState([]);
  let resume = [
    { priority: 2, skinCD: "E006" },
    { priority: 1, skinCD: "N003" },
    { priority: 5, skinCD: "S007" },
    { priority: 4, skinCD: "HL03" },
    { priority: 7, skinCD: "W005" },
    { priority: 8, skinCD: "A001" },
    { priority: 6, skinCD: "C006" },
    { priority: 9, skinCD: "D002" },
    { priority: 3, skinCD: "S002" },
    { priority: 10, skinCD: "L009" },
    { priority: 11, skinCD: "H009" },
    { priority: 12, skinCD: "AC01" },
  ];

  useEffect(() => {
    let finalData = template.sort(function (a, b) {
      return a.priority - b.priority;
    });
    setSortedData(finalData);
    console.log("Final data", finalData);
  }, [template]);
  console.log("SKIN CD", skinCD);
  return (
    <div class="template-design">
      {sortedData.map((data) => (
        <RendrererSkin skinCD={data.skinCD} />
      ))}
    </div>
  );
}

export default GetTemplateFromBlob;
