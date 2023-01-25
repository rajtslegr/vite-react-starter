import { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="font-inter flex min-h-screen flex-col place-items-center justify-center bg-[#242424] p-2 text-center text-base font-normal leading-6 text-gray-50">
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src="/vite.svg"
            className="hover:drop-shadow-vite h h-44 p-6"
            alt="Vite logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src="/react.svg"
            className="hover:drop-shadow-react h-44 p-6 hover:animate-spin motion-reduce:animate-none"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl">Vite + React</h1>
      <div className="space-y-2 p-8">
        <button
          onClick={() => setCount((previousCount) => previousCount + 1)}
          className="cursor-pointer rounded-lg border border-solid border-transparent bg-[#1a1a1a] p-2 text-base font-medium transition-colors hover:border-[#646cff]"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
