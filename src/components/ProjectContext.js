import React, { createContext, useState } from "react";

 

export const ProjectContext = createContext()

export const ProjectProvider = (props) => {
  const [videoPressed, setVideoPressed] = useState(false)
  return(
    <ProjectContext.Provider value={[videoPressed, setVideoPressed]}>
      {props.children}
    </ProjectContext.Provider>

  )
}
