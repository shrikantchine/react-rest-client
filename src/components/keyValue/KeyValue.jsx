import { Button, FormControl, InputGroup } from "react-bootstrap";

const KeyValue = ({ title, data, update }) => {
  const handleChange = (idx, event) => {
    let tmp = [...data];
    tmp[idx][event.target.name] = event.target.value;
    update(tmp);
  };

  const removeParam = (event, idx) => {
    let tmp = [...data];
    tmp.splice(idx, 1);
    update(tmp);
  };

  const addParam = () => {
    update([...data, { key: "", value: "" }]);
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <b>{title}</b>
        </div>
        <div className="col-auto">
          <Button variant="outline-success" onClick={addParam}>
            Add
          </Button>
        </div>
      </div>
      {data.map((element, index) => {
        return (
          <div key={index}>
            <InputGroup className="mt-2">
              <FormControl
                type="text"
                placeholder="key"
                name="key"
                value={element.key || ""}
                onChange={(e) => handleChange(index, e)}
              />
              <FormControl
                type="text"
                placeholder="Value"
                name="value"
                value={element.value || ""}
                onChange={(e) => handleChange(index, e)}
              />
              <Button
                variant="outline-danger"
                onClick={(e) => removeParam(e, index)}
              >
                Remove
              </Button>
            </InputGroup>
          </div>
        );
      })}
    </>
  );
};

export default KeyValue;
