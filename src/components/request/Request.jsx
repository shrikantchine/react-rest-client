import { useEffect, useState, useCallback } from "react";
import {
  Form,
  InputGroup,
  FormSelect,
  FormControl,
  Button,
  Tabs,
  Tab,
} from "react-bootstrap";
import KeyValue from "../keyValue/KeyValue";
import ReactCodeMirror from "@uiw/react-codemirror";

const getHeaderForFetch = (headers) => {
  const reqHeaders = new Headers();
  const filteredHeaders = headers.filter(
    ({ key, value }) => key !== "" && value !== ""
  );
  filteredHeaders.forEach(({ key, value }) => reqHeaders.append(key, value));
  if (filteredHeaders.length > 0) {
    return reqHeaders;
  }
  return new Headers();
};

const urlForFetch = (baseUrl, params) => {
  const keyValuePairs = [];
  for (const { key, value } of params) {
    let keyValid = key !== null && key !== "" && key !== undefined;
    let valueValid = value !== null && value !== "" && value !== undefined;
    if (keyValid && valueValid) {
      keyValuePairs.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(value)
      );
    }
  }
  let url = baseUrl;
  if (keyValuePairs.length > 0) {
    url = url + "?" + keyValuePairs.join("&");
  }
  return url;
};

export default Request = ({ setResponseBody, setResponseHeaders }) => {
  const [params, setParams] = useState([{ key: "", value: "" }]);
  const [headers, setHeaders] = useState([{ key: "", value: "" }]);
  const [body, setBody] = useState("");

  const onBodyChange = useCallback((val) => {
    setBody(val);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: event.target.httpMethod.value,
      headers: getHeaderForFetch(headers),
    };

    if (options.method !== "GET" && options.method !== "HEAD") {
      options["body"] = JSON.stringify(body);
    }

    fetch(urlForFetch(event.target.httpUrl.value, params), options)
      .then((res) => {
        setResponseHeaders(res.headers);
        console.log(res);
        return res.json();
      })
      .then((x) => {
        console.log(x);
        setResponseBody(x);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <InputGroup>
          <FormSelect className="flex-grow-0 w-auto" name="httpMethod">
            <option value={"GET"}>GET</option>
            <option value={"POST"}>POST</option>
            <option value={"PUT"}>PUT</option>
            <option value={"DELETE"}>DELETE</option>
          </FormSelect>
          <FormControl
            type="url"
            placeholder="http://example.com"
            name="httpUrl"
          />
          <Button type="submit">Send</Button>
        </InputGroup>
        <Tabs className="mt-4">
          <Tab
            eventKey={"params"}
            title="Params"
            className="p-3 border border-top-0"
          >
            <KeyValue title={"Params"} data={params} update={setParams} />
          </Tab>

          <Tab
            eventKey={"headers"}
            title="Headers"
            className="p-3 border border-top-0"
          >
            <KeyValue title={"Headers"} data={headers} update={setHeaders} />
          </Tab>

          <Tab
            eventKey={"body"}
            title="Body"
            className="p-3 border border-top-0"
          >
            <ReactCodeMirror
              inputMode="json"
              maxHeight="200px"
              minHeight="200px"
              name="body"
              onChange={onBodyChange}
            />
          </Tab>
        </Tabs>
      </Form>
    </div>
  );
};
