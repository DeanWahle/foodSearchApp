import axios from "axios";

export default axios.create({
  baseURL: "http://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer PCUO6_f3dBVm5F9ib84yUYGYSx2vpt4SqfSwjABKaRdqea4nrO5GWOciroY9jyHqa4xkk-oRR7xrh1S0rAbJeftauObyyw_P4o46BowMERNK1nrU6-FWBQG4nbPJX3Yx",
  },
});
