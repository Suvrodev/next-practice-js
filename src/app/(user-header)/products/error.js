"use client";
const ErrorPage = ({ error, reset }) => {
  return (
    <div className="w-full h-screen bg-red-500 flex flex-col items-center justify-center">
      <h1 className="text-xl text-white font-bold">Something went Wrong</h1>
      {error?.message}
      <button onClick={() => reset()} className="btn btn-warning text-white">
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
