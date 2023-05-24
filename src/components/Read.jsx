import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://645cece1e01ac610589765d5.mockapi.io/crud")
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  const getData = () => {
    axios
  .get("https://645cece1e01ac610589765d5.mockapi.io/crud")
  .then((getData) => {
    setApiData(getData.data);
  });
}

const onDelete = (id) => {
  axios.delete(`https://645cece1e01ac610589765d5.mockapi.io/crud/${id}`)
  .then(() => {
    getData();
  })
}

  const SetID = (id) => {
    localStorage.setItem( "ID", id)
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>FirstName</Table.HeaderCell>
          <Table.HeaderCell>LastName</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {apiData.map((data) => {
          return (
            <Table.Row key={data.id}>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>
                <Link to={"/update"}>
                  <button onClick={(id)=> SetID(data.id)}>Update</button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                  <button onClick={() => onDelete(data.id)}>Delete</button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
export default Read;
