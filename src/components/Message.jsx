import { useState } from "react";
import {
  useGetMessageQuery,
  useAddMessageMutation,
  useLikeMessageMutation,
  useDeleteMessageMutation,
} from "../redux/messageApi";

const Message = () => {
  const { isLoading, error, data } = useGetMessageQuery();
  const messages = data
    ? data.ids.map((id) => data.entities[id])
    : [];
  const [addMessage] = useAddMessageMutation();
  const [addLike] = useLikeMessageMutation();
  const [deleteMessage] = useDeleteMessageMutation();
  const [newMessage, setNewMessage] = useState("");

  const handleAddMessage = async () => {
    if (newMessage.trim() !== "") {
      await addMessage({ text: newMessage, likes: 0 });
      setNewMessage("");
    }
  };
  const handleAddLike = async (id, currentLikes) => {
    const newLikes = currentLikes + 1;
    await addLike({ id, likes: newLikes });
  };
  const handleDecrementLike = async (id, currentLikes) => {
    const newLikes = currentLikes > 0 ? currentLikes - 1 : 0;
    await addLike({ id, likes: newLikes });
  };
 
  return (
    <div style={{ textAlign: "center" }}>
      <h1>پیام‌ها</h1>
      {isLoading && <p>در حال بارگذاری...</p>}
      {error && <p>خطا در بارگذاری پیام‌ها!</p>}
      {messages &&
        messages.map((message) => (
          <div key={message.id} style={{ margin: "10px" }}>
            <p>{message.text}</p>
            <div>
              <button onClick={() => handleAddLike(message.id, message.likes)}>
                پسندیدم
              </button>
              <button
                onClick={() => handleDecrementLike(message.id, message.likes)}
              >
                نپسندیدم
              </button>
              <span> {message.likes}</span>
              <button
                onClick={() => deleteMessage(message.id)}
                style={{ marginRight: "10px", color: "red" }}
              >
                حذف
              </button>
            </div>
          </div>
        ))}

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="پیام جدید..."
        />
        <button onClick={handleAddMessage}>ارسال پیام</button>
      </div>
    </div>
  );
};

export default Message;
