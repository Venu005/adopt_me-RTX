const fetchBreedList = async ({ queryKey }) => {

  const animal = queryKey[1];
  if (!animal) return [];
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error("breeds/${animal} fetch not ok");
  }
  /* don't forget to give json() as a function, I gave it as apiRes.json which can't fetch the details of the pet  */
  return apiRes.json();
};
export default fetchBreedList;
