import axios from "axios";
import { Toast } from "./toast";
import Modal from "component/Common/LoaderModal";
import { history } from "helpers";
import endpoints from "./endpoints";
import { getbaseUrl } from "./baserul";

export const request = ({
  url,
  method = endpoints.APIMethods.GET,
  data,
  isLoader = true,
  baseUrl = "users",
  params,
}) =>
  new Promise((resolve, reject) => {
    let token = localStorage.getItem("token");
    let config = {
      url: getbaseUrl(baseUrl) + url,
      method: method,
      params: params ? params : null,
      data: data ? data : null,
      headers: {
        Authorization: token ? "Bearer " + token : "",
        "Content-Type": "application/json",
      },
    };
    config.params == null && delete config.params;
    config.data == null && delete config.data;

    console.log(config, "request");
    showLoader(isLoader);

    axios(config)
      .then((response) => {
        let {
          data: { message },
        } = response;
        console.log(response, "response");
        showLoader(false);
        method !== "GET" && Toast({ type: "success", message: message });
        return resolve(response);
      })
      .catch(({ response }) => {
        console.log(response, "error");
        showLoader(false);
        if (response) {
          let {
            status,
            data: { message },
          } = response;
          Toast({ type: "error", message: message });

          if (status === 401) {
            history.replace("/home");
          }
        } else {
          Toast({
            type: "error",
            message: "Not able to connect the server. Please try again later",
          });
        }

        return reject(response);
      });
  });

const showLoader = (status) => {
  if (Modal && Modal.render && Modal.render.defaultProps) {
    Modal.render.defaultProps.setLoaderStatus(status);
  }
};
