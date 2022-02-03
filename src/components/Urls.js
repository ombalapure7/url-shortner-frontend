import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";

// const url = "http://localhost:5000/api/v1/url";
const url = "https://guvi-task-session-38.herokuapp.com/api/v1/url";

function Urls() {
  const [urls, setUrls] = useState([]);
  const [warning, setWarning] = useState("");
  const [updateInfo, setUpdateInfo] = useState(false);
  const urlRef = useRef();

  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/", { replace: true });

  /**
   * @desc Display loggedin username
   */
  function getUserName() {
    if (localStorage.getItem("url_shortner")) {
      const data = JSON.parse(localStorage.getItem("url_shortner"));
      setUser(data.name);
    }
  }

  /**
   * @desc Function to logout
   */
  function logOut() {
    if (localStorage.getItem("url_shortner")) {
      localStorage.removeItem("url_shortner");
    }

    navigateToHome();
  }

  useEffect(() => {
    getUserName();
  }, []);

  /**
   * @desc Takes long URL as input and create a short URL
   */
  async function createShortUrl() {
    if (!localStorage.getItem("url_shortner")) {
      setWarning("Somethings not rigth, login again to use the URL shortner!");
    }

    if (urlRef) {
      if (urlRef.current.value === "") {
        setWarning("Enter a valid URL!");
        return;
      }

      setWarning("");

      await axios.post(`${url}`, {
        long: urlRef.current.value,
      });

      urlRef.current.value = "";
      getUrlData();
    }
  }

  /**
   * Get all the urls
   */
  async function getUrlData() {
    const response = await axios.get(url);
    const urls = response.data.urls;

    if (urls.length < 1) {
      setWarning("No Urls present in the database!");
      return;
    }

    setUrls(urls);
  }

  /**
   * @desc Redirect using short URL
   * @param {*} id
   */
  async function getUrl(id) {
    setUpdateInfo(true);
    axios.get(`${url}/${id}`);
  }

  /* Execute functions on render/re-render */
  useEffect(() => {
    getUrlData();
  }, []);

  useEffect(() => {
    getUrlData();
  }, [updateInfo]);

  return (
    <div className="container">
      <div className="input-group mb-3 py-5">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a long URL"
          ref={urlRef}
        />
        <button onClick={createShortUrl} className="input-group-text">
          Create Short URL
        </button>
      </div>
      <table className="table table-striped" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th scope="col">Long URL</th>
            <th scope="col">Short URL</th>
            <th scope="col">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => {
            return (
              <tr key={url._id}>
                <td>{url.long}</td>
                <td>
                  <a href={url.long} onClick={() => getUrl(url.short)}>
                    {url.short}
                  </a>
                </td>
                <td>{url.clicks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        {warning ? (
          <p
            className="d-flex justify-content-center alert alert-danger"
            role="alert"
          >
            {warning}
          </p>
        ) : null}
      </div>
      <div className="footer">
        <div className="d-flex justify-content-around align-middle flex-wrap">
          <big><p className="fw-bold">Hello <i>{user.split(" ")[0]}</i> !</p></big>
          <button className="btn btn-primary" onClick={logOut}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Urls;
