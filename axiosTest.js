let axios = require("axios");
const RANDOM_USER_URL = "https://randomuser.me/api/?results=5";

getRandomUsers();

async function getRandomUsers() {
  const response = await axios.get(RANDOM_USER_URL);
  // console.log(response);
  const data = response.data;
  // console.log("DATA");
  // console.log(typeof data);
  // console.log(data);
  let oneItem = data.results[0];
  for (let [key, val] of Object.entries(oneItem)) {
    console.log("key", key);
    console.log(val);
  }
  return data;
}

// {
//   results: [
//     {
//       gender: 'male',
//       name: [Object],
//       location: [Object],
//       email: 'vsevlad.zhayvoronok@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '(098) P64-9904',
//       cell: '(096) S20-0170',
//       id: [Object],
//       picture: [Object],
//       nat: 'UA'
//     },
//   ],
//   info: { seed: 'd3ae6c9a3709c4cf', results: 5, page: 1, version: '1.4' }
// }
