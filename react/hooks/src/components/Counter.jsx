import { useCount } from "../hooks/useCount";

export function Counter() {
  const { count, increment, decrement, reset } = useCount();

  return (
    <div className="container text-center mt-5">
      <h1>{count}</h1>
      <hr />
      <button className="btn btn-primary me-2" onClick={() => increment(50)}>
        +1
      </button>
      <button
        className="btn btn-secondary me-2"
        onClick={reset}
        disabled={count === 0}
      >
        Reset
      </button>
      <button
        className="btn btn-danger"
        onClick={() => decrement()}
        disabled={count === 0}
      >
        -1
      </button>
    </div>
  );
}
