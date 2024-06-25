const GET = (request: Readonly<Request>) => {
  console.log(request);
  // return new Response("Hello!");
  return Response.json({ message: "Hello!" });
};

export { GET };
