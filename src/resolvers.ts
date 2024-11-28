const books = [
    {
      title: "The Awakening",
      author: "Kate Chopin",
    },
    {
      title: "City of Glass",
      author: "Paul Auster",
    },
  ];
  // Resolvers define how to fetch the types defined in your schema.
  // This resolver retrieves books from the "books" array above.
  export const resolvers = {
    Query: {
      matches: async () => {
        const res = await fetch(
          "https://www.fotmob.com/api/matches?date=20241128&timezone=Asia%2FTehran&ccode3=ALB",
          {
            headers: {
              "sec-ch-ua":
                '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": '"Windows"',
              "x-mas":
                "eyJib2R5Ijp7InVybCI6Ii9hcGkvbWF0Y2hlcz9kYXRlPTIwMjQxMTI4JnRpbWV6b25lPUFzaWElMkZUZWhyYW4mY2NvZGUzPUFMQiIsImNvZGUiOjE3MzI3ODI5OTU5MzMsImZvbyI6IjNjM2FlNTc1MyJ9LCJzaWduYXR1cmUiOiJEQUNFNDg5NERDMzZCMkE5NDQyRkVBNEM5Q0Y0NTMwMSJ9",
            },
            referrer: "https://www.fotmob.com/en-GB",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "GET",
            mode: "cors",
            credentials: "omit",
          }
        );
        const data = await res.json();
        console.log(data.leagues[0].matches[0]);
  
        return data.leagues;
      },
    },
  };
  