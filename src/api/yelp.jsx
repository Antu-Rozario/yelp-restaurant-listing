import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer lOIUdaEYIb6OvC_i8rXVoBKS1TrNoVr8RHkvybE6uI1MFLgy8Gywf3xdqzpP_Yqz-vsIZGMflPbau9bzgbwlj-gPez6OWt_CWtNRs3QR7gfeiVlc5lXUQpHGjj2FYnYx",
  },
});
