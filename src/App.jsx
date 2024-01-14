import { useState } from "react";
import Request from "./components/request";
import Response from "./components/response";

function App() {
  const [responseBody, setResponseBody] = useState("");
  const [responseHeaders, setResponseHeaders] = useState([]);
  return (
    <>
      <h2 className="px-5 pt-1">React Client</h2>
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
    </>
  );
}

export default App;
