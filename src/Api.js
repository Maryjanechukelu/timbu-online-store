// import axios from "axios"

// const BASE_URL = "https://api.timbu.cloud/"

// const API_KEY = "01a261506aa2480ca207f7f1eed3732220240713073416787076"

// const APP_ID = "GZ36CNEXP03X0EW"

// const ORGANIZATION_ID = "00b19697d50f4c8198841e0c810259bf"


// export const getProducts = async (page = 1, limit = 12) => {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}/${APP_ID}/${ORGANIZATION_ID}/products`,
//       {
//         headers: {
//               Authorization: `Bearer ${API_KEY}`,
//               ContentType: "application/json",
//         },
//         params: {
//           page,
//           limit,
//         },
//       }
//     )
//     return response.data
//   } catch (error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.error("Response error:", error.response.data)
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.error("Request error:", error.request)
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.error("Error", error.message)
//     }
//     throw error
//   }
// }
