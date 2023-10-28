const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error("details/${id} fetch not ok");
  }
  /* don't forget to give json() as a function, I gave it as apiRes.json which can't fetch the details of the pet  */
  return apiRes.json();
};
export default fetchPet;
