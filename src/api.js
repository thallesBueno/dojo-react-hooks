import axios from 'axios';

const baseUrl = 'https://acamc-backend-develop-dev.softdesign-rs.com.br/announcements/';

const searchAnnouncements = async (searchText) => {
  const axiosResponse = await axios.get(baseUrl, { params: { search: searchText }});
  return axiosResponse.data;
}

const Api = {
  searchAnnouncements
}
export default Api;
