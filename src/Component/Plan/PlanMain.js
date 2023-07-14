import React from 'react';
import Plan from './Plan';
import PlanRC from './PlanRC';

function PlanMain() {
  return (
    <div>
      <div className=' flex bg-white gap-10 mt-10 ml-10 justify-center'>
      <Plan/>
        <PlanRC/>
      </div>
      
    </div>
  );
}

export default PlanMain;
