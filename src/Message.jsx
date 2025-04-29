import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/likeSlice";

const Message = () => {
  const likes = useSelector((state) => state.like.likes);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center" }}>
      <p>سلام</p>
      <button onClick={() => dispatch(increment())}>پسندیدم</button>{" "}
      <button onClick={() => dispatch(decrement())}>نپسندیدم</button>
      <span> {likes}</span>
    </div>
  );
};

export default Message;
