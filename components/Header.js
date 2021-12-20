import { useState } from 'react';
const Header = () => {
  const [title, setTitle] = useState('Cookie Stand Admin'); 
  return (
    <>
      <header className=" bg-green-400 p-5 flex-row">
        <h1 className="text-3xl font-bold">
          {title}
        </h1>
      </header>
    </>
  );
}

export default Header
