import Button from '@components/Button';
import useCountStore from '@store/useCountStore';

const Counter = () => {
  const { count, increment, decrement, reset } = useCountStore();

  return (
    <div className="flex flex-col items-center space-y-2 p-8">
      <p className="text-2xl">Count: {count} - Zustand</p>
      <div className="flex space-x-2">
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
};

export default Counter;
