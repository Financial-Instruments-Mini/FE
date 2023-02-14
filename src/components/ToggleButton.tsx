import React, { useState } from 'react';

const ToggleButton = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className='flex items-center bg-sub-gray bg-opacity-40 text-gray px-1 py-1 rounded-full gap-1 text-sm font-bold'>
      <button className={toggle ? 'bg-white p-2 rounded-full' : 'p-2'} onClick={() => setToggle(!toggle)}>
        금리순
      </button>
      <button className={!toggle ? 'bg-white p-2 rounded-full' : 'p-2'} onClick={() => setToggle(!toggle)}>
        최신순
      </button>
    </div>
  );
};

export default ToggleButton;
