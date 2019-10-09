export const shrinkAddress = (address: string) => {
  if (address.length <= 34) {
    return address;
  }
  return `${address.substring(0, 17)}...${address.substring(
    address.length - 17
  )}`;
};