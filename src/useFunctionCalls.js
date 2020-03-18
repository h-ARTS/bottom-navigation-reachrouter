const functions = new Set();

const useFunctionCalls = fns => {
  if (fns.length > 0) {
    fns.forEach((fn, i) => {
      console.log(i)
      functions.add(fn);
    });
  }
  const calls = functions.size;
  console.log("FUNCTIONS: ", functions);

  return calls;
};

export default useFunctionCalls;
