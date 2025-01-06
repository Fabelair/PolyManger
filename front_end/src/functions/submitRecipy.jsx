import axios from "axios";
async function submitRecipy(data){
    const response = await axios.request({
        method: 'POST',
        url: `http://localhost:3000/addRecette`,
        headers: {
        },
        data: data,
      
      })
    const rep = await response.data;
    console.log(rep)
    return rep;
};

export default submitRecipy