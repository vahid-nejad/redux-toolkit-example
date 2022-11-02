import { useEffect } from "react";
import Add from "./components/Add";
import List from "./components/List";
import { fetchPerson } from "./store/features/personSlice";
import { useAppDispatch } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPerson());
  });
  return (
    <div>
      <Add />
      <List />
    </div>
  );
}

export default App;
