import { useState } from "react";
import Request from "./components/request";
import Response from "./components/response";
import { FaJedi } from "react-icons/fa";
import { Navbar } from "react-bootstrap";

function App() {
  const [responseBody, setResponseBody] = useState("");
  const [responseHeaders, setResponseHeaders] = useState([]);
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Navbar.Brand className="px-5">
          <FaJedi size={38} /> <span className="px-3">React Client</span>
        </Navbar.Brand>
      </Navbar>
      {/* <div className="d-flex px-5 pt-2">
        <FaJedi size={40} />
        <h2 className="px-3 pt-1">React Client</h2>
      </div> */}
      <div className="p-5 pt-4">
        <Request
          setResponseBody={setResponseBody}
          setResponseHeaders={setResponseHeaders}
        />
        <div className="mt-4">
          <h3>Response</h3>
          <Response body={responseBody} headers={responseHeaders} />
        </div>
      </div>
    </div>
  );
}

export default App;
