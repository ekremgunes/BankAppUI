export const getCardImage = (brand) => {
  switch (brand) {
    case "Master":
      return require("../assets/images/master.png");
    default:
      return null;
  }
};
