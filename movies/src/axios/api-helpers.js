import axios from "axios";

export const getAllMovies = async () => {
    const res = await axios.get("/movie").catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("No Data");
    }

    const data = await res.data;
    // console.log(data);
    return data;
};

export const sendUserAuthRequest = async (data, signup) => {
    try {
      const res = await axios.post(`/user/${signup ? "signup" : "login"}`, {
        name: signup ? data.name : "",
        email: data.email,
        password: data.password,
      });
  
      if (res.status !== 200 && res.status !== 201) {
        throw new Error("Unexpected error occurred");
      }
  
      const resData = await res.data;
      return resData;
    } catch (err) {
      console.error(err);
      return { error: err.message };
    }
  };

export const sendAdminAuthRequest = async(data)=>{
    const res = await axios.post("/admin/login",{
        email: data.email,
        password: data.password,
    }).catch((err) => console.log(err));

    if(res.status!==200) {
        return console.log("Unexpected error ");
    }

    const resData = await res.data;
    return resData;

};

