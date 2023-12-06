import axios from "axios";

export const getFavs = async (token, user_id) => {
  const resp = await axios.get(
    `http://127.0.0.1:8000/Users/Favs`,
    {user_id},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const favs = resp.data;
  return favs;
};