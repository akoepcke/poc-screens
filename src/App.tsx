function App() {
  return (
    // add or remove overflow-scroll when div is/is not restricted to parentContainer
    <div className="h-full bg-red-500">
      {/* <div className="h-full overflow-scroll bg-red-500"> */}
      <div className="w-10 bg-green-300 h-2/3"></div>
      <div className="w-10 bg-green-500 h-2/3"></div>
    </div>
  );
}

export default App;
