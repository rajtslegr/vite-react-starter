import Button from '@components/Button';
import Posts from '@components/Posts';
import useCountStore from '@store/useCountStore';

const App = () => {
  const { count, increment, decrement, reset } = useCountStore();

  return (
    <div className="flex min-h-screen flex-col place-items-center justify-center bg-[#242424] p-2 text-center font-inter text-base font-normal leading-6 text-gray-50">
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src="/vite.svg"
            className="h h-44 p-6 hover:drop-shadow-vite"
            alt="Vite logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src="/react.svg"
            className="h-44 p-6 hover:animate-spin hover:drop-shadow-react motion-reduce:animate-none"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl">Vite + React</h1>
      <div className="space-y-2 p-8">
        <p className="text-2xl">Count: {count} - Zustand</p>
        <div className="flex space-x-2">
          <Button onClick={decrement}>Decrement</Button>
          <Button onClick={increment}>Increment</Button>
          <Button onClick={reset}>Reset</Button>
        </div>
      </div>
      <Posts />
      <p className="text-[#888]">
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default App;
