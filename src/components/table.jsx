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
  useColorModeValue,
} from "@chakra-ui/react";

export default function MyTable({ data }) {

  return (
    <TableContainer width={"90%"}>
      <Table
        variant="simple"
        borderStyle={"solid"}
        borderWidth={"2px"}
        borderColor={"#E9E9E9"}
      >
        <TableCaption fontSize={26}>Members Data</TableCaption>
        <Thead bg={'white'} >
          <Tr >
            <Th >ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Age</Th>
            <Th>City</Th>
            <Th>Cannabis Required</Th>
          </Tr>
        </Thead>
        <Tbody bg={'white'}>
          {data?.map((item, index) => (
            <Tr key={index}>
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
