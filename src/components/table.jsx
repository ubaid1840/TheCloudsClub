import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function MyTable({ data }) {
  console.log(data);

  return (
    <TableContainer width={"90%"}>
      <Table
        variant="simple"
        borderStyle={"solid"}
        borderWidth={"2px"}
        borderColor={"#E9E9E9"}
      >
        <TableCaption>Members Data</TableCaption>
        <Thead bg={"cyan.400"}>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Age</Th>
            <Th>City</Th>
            <Th>Cannabis Required</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((item) => (
            <Tr>
              <Td>{item.id}</Td>
              <Td>{item.name}</Td>
              <Td>{item.email}</Td>
              <Td>{item.age}</Td>
              <Td>{item.city}</Td>
              <Td>{item.requiredCannabis}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
