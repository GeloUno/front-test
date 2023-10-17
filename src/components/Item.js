import React from 'react';
import { v4 } from 'uuid';
const Item = (props) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {props.list.map((item) => {
        return (
          <div key={v4()}>
            {item.user.name}
            {item.urls.small && (
              <img
                src={item.urls.small + '&w=300&h=300'}
                alt="nice img"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Item;
