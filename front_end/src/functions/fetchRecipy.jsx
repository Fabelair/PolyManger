import axios from "axios";
async function fetchRecipy(page, limit){
    const response = await axios.request({
        method: 'POST',
        url: `http://localhost:3000/fetchRecettes`,
        headers: {
        },
        data: {
          limit: limit,
          page: page
        },
      
      })
    const data = await response.data;
    return data;
};

export default fetchRecipy