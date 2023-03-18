const Search = (location, destination) => {
  let locationsInLowerCase = location.toLowerCase();
  let res = locationsInLowerCase.includes(destination.toLowerCase());
  return res;
};
export const SearchforLocation = (src, dest, fromsrc, fromdest) => {
  let srcInLowerCase = src.toLowerCase();
  let destInLowerCase = dest.toLowerCase();
  let res1 = srcInLowerCase.includes(fromsrc.toLowerCase());
  let res2 = destInLowerCase.includes(fromdest.toLowerCase());
  if (res1 && res2) {
    return true;
  } else {
    return false;
  }
};

export default Search;
