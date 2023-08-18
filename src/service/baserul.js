//To handle more microservice

export const getbaseUrl = (url) => {
  switch (url) {
    case "users":
      return process.env.REACT_APP_API_URL;
    case "orders":
      return process.env.REACT_APP_API_ORDER_URL;
    case "notifications":
      return process.env.REACT_APP_API_NOTIFICATION_URL;

    default:
      return process.env.REACT_APP_API_URL;
  }
};
