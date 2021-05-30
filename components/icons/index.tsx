import React, { FC, ReactNode } from 'react';
import {IPropsIcons} from "../../types";



const Icons: FC<IPropsIcons> = ({ dir, children }) => {
  return (
    <div className={dir === 'row' ? 'icons row' : 'icons column'}>
      {children}

      <style jsx>{`
        .icons {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .row {
          flex-direction: row;
        }
        .column {
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default Icons;
