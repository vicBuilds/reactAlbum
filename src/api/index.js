const ROOT_URL = "https://jsonplaceholder.typicode.com/albums";

const GetAllPost = async () => {
  let response = await fetch(`${ROOT_URL}/`);
  response = await response.json();
  return response;
};

const CreatePost = async ({ albumId, title, userId }) => {
  let data = await fetch(`${ROOT_URL}`, {
    method: "POST",
    body: JSON.stringify({
      id: albumId,
      title: title,
      userId: userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  data = await data.json();
  return data;
};

const UpdatePost = async (albumId, { title, userId }) => {
  let data = await fetch(`${ROOT_URL}/${albumId}`, {
    method: "PUT",
    body: JSON.stringify({
      id: albumId,
      title: title,
      userId: userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  data = await data.json();
  return data;
};

const DeletePost = async (albumId) => {
  let data = await fetch(`${ROOT_URL}/${albumId}`, {
    method: "DELETE",
  });
  data = await data.json();
  return data;
};

export { GetAllPost, UpdatePost, DeletePost, CreatePost };
