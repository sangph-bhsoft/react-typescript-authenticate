function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white-100   rounded px-8 pt-6 pb-8 mb-4 flex shadow w-2/5 p-8 flex-col items-center">
        <h1 className="text-gray-darker  font-bold text-xl">LOGIN</h1>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 outline-none text-gray-700"
            id="username"
            type="text"
            placeholder="username"
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full outline-none py-2 px-3 text-gray-700 mb-3"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <button className="bg-purple-600 bg-opacity-75 hover:bg-opacity-100 text-white font-bold py-2 px-4 rounded focus:outline-none">
            LOGIN
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="/"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
