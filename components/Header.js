import { useState } from 'react';
const Header = () => {
  const [title, setTitle] = useState('Cookie Stand Admin'); 
  return (
    <>
      <header className="flex justify-between p-5 bg-green-400">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div>
          <button className="bg-white p-0.5 border rounded-lg">Overview</button>
        </div>
      </header>
    </>
  );
}

export default Header;
