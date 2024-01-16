import ReactCodeMirror from "@uiw/react-codemirror";
import { Tab, Tabs } from "react-bootstrap";
import ResponseHeaders from "./ResponseHeaders";
import { githubDark } from "@uiw/codemirror-theme-github";

const Response = ({ body, headers }) => {
  let bodyJson = "";
  if (body) {
    bodyJson = JSON.stringify(body, null, " ");
  }
  return (
    <>
      <Tabs className="darkTab">
        <Tab
          eventKey={"responseBody"}
          title="Response body"
          className="p-3 border border-top-0"
        >
          <ReactCodeMirror
            height="200px"
            readOnly
            value={bodyJson}
            theme={githubDark}
          />
        </Tab>
        <Tab
          eventKey={"headers"}
          title="Headers"
          className="p-3 border border-top-0"
        >
          <ResponseHeaders headers={headers} />
        </Tab>
      </Tabs>
    </>
  );
};

export default Response;
