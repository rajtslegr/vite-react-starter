import { Link, Outlet } from '@tanstack/react-router';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#242424] font-inter text-base font-normal leading-6 text-gray-50">
      <header className="fixed inset-x-0 top-0 z-10 bg-[#242424] p-4">
        <div className="flex items-center gap-8">
          <div className="flex">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img
                src="/vite.svg"
                className="h-12 p-2 hover:drop-shadow-vite"
                alt="Vite logo"
              />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              <img
                src="/react.svg"
                className="h-12 p-2 hover:animate-spin hover:drop-shadow-react motion-reduce:animate-none"
                alt="React logo"
              />
            </a>
          </div>
          <nav>
            <Link to="/" className="mr-4">
              Counter
            </Link>
            <Link to="/posts">Posts</Link>
          </nav>
        </div>
      </header>
      <main className="mt-20 flex grow flex-col items-center justify-center p-4">
        <Outlet />
        <p className="mt-4 text-[#888]">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </main>
    </div>
  );
};

export default App;
