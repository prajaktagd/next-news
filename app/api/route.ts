const GET = (request: Readonly<Request>) => {
  // return new Response("Hello!");
  return Response.json({ message: "Hello!" });
};

export { GET };
