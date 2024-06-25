import getRandomUsers from "@/app/apiMethods/randomUserMethods";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const MOCK_AXIOS_RESPONSE = {
  data: {
    results: [
      {
        gender: "male",
        name: { title: "Ms", first: "Denise", last: "Fowler" },
        location: {
          street: { number: 4891, name: "Smokey Ln" },
          city: "Edison",
          state: "New Jersey",
          country: "United States",
          postcode: 82229,
          coordinates: { latitude: "88.9414", longitude: "3.5551" },
          timezone: {
            offset: "-6:00",
            description: "Central Time (US & Canada), Mexico City",
          },
        },
        email: "vsevlad.zhayvoronok@example.com",
        login: {
          uuid: "44d37c49-ccf0-4806-80ea-dd1e2a3d642d",
          username: "purplesnake860",
          password: "timeout",
          salt: "W8aGayFb",
          md5: "2246e84fefa2481b67ab5457bf11c316",
          sha1: "582a3f5f1754c83d927a4b9aa3f66d420cc4cd37",
          sha256:
            "bea1c76c71dd41a8cfda60e501624827caede6debf4d6199650cb99106c78512",
        },
        dob: { date: "1948-11-16T23:26:21.239Z", age: 75 },
        registered: { date: "2020-08-16T20:00:21.127Z", age: 3 },
        phone: "(098) P64-9904",
        cell: "(096) S20-0170",
        id: { name: "SSN", value: "719-98-1705" },
        picture: {
          large: "https://randomuser.me/api/portraits/women/13.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/13.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/13.jpg",
        },
        nat: "UA",
      },
    ],
    info: { seed: "d3ae6c9a3709c4cf", results: 5, page: 1, version: "1.4" },
  },
};

describe("api.ts", () => {
  it("make api call, names match", async () => {
    mockedAxios.get.mockResolvedValue(MOCK_AXIOS_RESPONSE);
    let results = await getRandomUsers();
    let firstPerson = results[0];
    let firstName = firstPerson.name.first;
    expect(firstName).toBe(MOCK_AXIOS_RESPONSE.data.results[0].name.first);
  });

  it("make api call, data length matches", async () => {
    mockedAxios.get.mockResolvedValue(MOCK_AXIOS_RESPONSE);
    let results = await getRandomUsers();
    expect(results.length).toBe(MOCK_AXIOS_RESPONSE.data.results.length);
  });
});
