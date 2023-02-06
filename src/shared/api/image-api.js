import axios from 'axios';

const BASEURL = 'https://pixabay.com/api/';
const APIKEY = '33301750-b84761496a8e314e5d4f87f30';
const PERPAGE = 12;

export const searchImages = async (searchQuery, page) => {
  const responce = await axios.get(
    `${BASEURL}?q=${searchQuery}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=${PERPAGE}`
  );
  return responce.data.hits;
};
