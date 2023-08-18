const importImage = (fileName) => {
  return require(`assets/images/${fileName}`);
};

const importIcons = (fileName) => {
  return require(`assets/icons/${fileName}`);
};

export const images = {
  logo: importImage("logo.svg"),
  authbg: importImage("authlayoutbg.png"),
};

export const icons = {
  key: importIcons("key.svg"),
  eyeOpen: importIcons("eye_opened.svg"),
  eyeClosed: importIcons("eye_closed.svg"),
  dashboard: importIcons("dashboard.svg"),
  user: importIcons("user.svg"),
  order: importIcons("order.svg"),
  product: importIcons("product.svg"),
  customer: importIcons("customer.svg"),
  coupon: importIcons("coupon.svg"),
  blog: importIcons("blog.svg"),
};
