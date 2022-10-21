import React from 'react';

//Объявили и описали объект с типами данных, наследовали children (чтобы добвить <b>, <span> в App.tsx)
interface PersonProps extends React.PropsWithChildren {
  randomNumber: number;
}

const Circle: React.FC<PersonProps> = (props) => {
  return (
    <div className="circle">
      <p>{props.randomNumber}</p>
    </div>
  );
};

export default Circle;