import { createContext, useContext, useState } from "react";

const SkinContext = createContext();
const LoadingContext = createContext({
  loading: false,
  updateLoading: () => {},
});
const TemplateContext = createContext({
  template: [],
  addTemplate: () => {},
  removeTemplate: () => {},
});

export const SkinProvider = ({ children }) => {
  const [skinCD, setSkinCD] = useState("C002"); // Initial value, replace it with your default value
  const [loading, setLoading] = useState(true);
  const [template, setTemplate] = useState([]);

  const removeTemplate = (priority) => {
    if (template.length > 0) {
      setTemplate((template) =>
        template.filter((temp) => temp.priority !== priority)
      );
    } else {
      setTemplate([]);
    }
  };
  const addTemplate = async (priority, skinCode) => {
    let findTemplate = template.findIndex((temp) => temp.priority == priority);
    console.log("Find temopalte index", findTemplate);
    if (findTemplate > -1) {
      let testTemplate = template;
      testTemplate[findTemplate].skinCD = skinCode;
      console.log("Testa template", testTemplate);
      setTemplate(testTemplate);

      console.log("Template updpated", template);
    } else {
      let temp = { priority, skinCD: skinCode };
      let templateTest = template;
      templateTest.push(temp);
      setTemplate((prev) => templateTest);
      console.log("Template updpated in else", template);
    }
  };
  console.log("Template template of context", template);

  const updateSkinCD = (newSkinCD) => {
    setSkinCD(newSkinCD);
  };
  const updateLoading = (val) => {
    setLoading(val);
  };

  return (
    <TemplateContext.Provider value={{ template, addTemplate, removeTemplate }}>
      <LoadingContext.Provider value={{ loading, updateLoading }}>
        <SkinContext.Provider value={{ skinCD, updateSkinCD }}>
          {children}
        </SkinContext.Provider>
      </LoadingContext.Provider>
    </TemplateContext.Provider>
  );
};

export const useSkin = () => {
  const context = useContext(SkinContext);
  if (!context) {
    throw new Error("useSkin must be used within a SkinProvider");
  }
  return context;
};
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
export const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplate must be used within a TemplateProvider");
  }
  return context;
};
