import type { RootState } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./store/reducers/login";



function App() {
  const loginStore = useSelector((state: RootState) => state.login);
  console.log(loginStore);
  const dispatch = useDispatch();
  // console.log(rootReducer.)

  return (
    <div className="App">
      <h1
        onClick={() => {
          dispatch(login({ userName: "test", token: "test" }));
        }}
        className="text-3xl font-bold underline text-black"
      >
        TEST
      </h1>
    </div>
  );
}

export default App;
