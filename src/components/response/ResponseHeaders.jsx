import { Table } from "react-bootstrap";

const ResponseHeaders = ({ headers }) => {
  if (headers) {
    const keyValues = [];
    headers.forEach((value, key) =>
      keyValues.push(
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      )
    );
    return (
      <div className="m-3 mt-0 pt-3">
        <Table striped hover size="sm">
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>{keyValues}</tbody>
        </Table>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ResponseHeaders;
