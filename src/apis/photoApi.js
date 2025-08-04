import axios from "axios";

const photoURL = "https://jsonplaceholder.typicode.com/todos";
const getPhotos = async () => {
  try {
    const res = axios.get(photoURL);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
const getPhoto = async id => {
  try {
    const res = axios.get(`${photoURL}/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
const postPhoto = async data => {
  try {
    const res = axios.post(photoURL, data);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
const deletePhoto = async id => {
  try {
    const res = axios.delete(`${photoURL}/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
const putPhoto = async (id, data) => {
  try {
    const res = axios.put(`${photoURL}/${id}`, data);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
const patchPhoto = async (id, { title, thumbnailUrl }) => {
  try {
    const res = axios.patch(`${photoURL}/${id}`, { title, thumbnailUrl });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export { getPhotos, getPhoto, postPhoto, putPhoto, deletePhoto, patchPhoto };
