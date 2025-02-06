import React, { createContext, useState } from "react";

// Create context
export const TemplateInfoContext = createContext(null);

// Provider component
export const TemplateSelectionProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <TemplateInfoContext.Provider value={{ selectedTemplate, setSelectedTemplate }}>
      {children}
    </TemplateInfoContext.Provider>
  );
};



