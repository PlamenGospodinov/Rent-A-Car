import React from "react";
import cl from "./Model.module.css";

const MyModel = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.myModel];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.myModelContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModel;
