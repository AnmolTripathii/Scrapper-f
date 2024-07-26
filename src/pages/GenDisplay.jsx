import React, { useContext } from 'react';
import { WebContext } from '../context/Context';
import { useParams } from 'react-router-dom';
import Breadcrum from '../component/Breadcrum/Breadcrum';
import Generate from '../component/Generate/Generate';

function GenDisplay() {
  const { allGenerate } = useContext(WebContext);
  const { GenId } = useParams();

  const generatedObj = allGenerate.find((e) => e._id === GenId) || null;

 
  if (allGenerate.length === 0) {
    return <div>Loading...</div>;
  }


  if (!generatedObj) {
    return <div>Data not found</div>;
  }

  return (
    <div>
      <Breadcrum generatedObj={generatedObj} />
      <Generate generatedObj={generatedObj} />
    </div>
  );
}

export default GenDisplay;
