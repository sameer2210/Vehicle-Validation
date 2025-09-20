import { useEffect, useState } from "react";
import BASE_URL from "../components/BASE_URL";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Display=()=>{

        const [data, setData] = useState([]);

        const getData = async()=>{
        try {
            const api = `${BASE_URL}/vehicle/datadisplay`;
            const response = await axios.get(api);
            setData(response.data);
        } catch (error) {
            console.log(error);   
        }
    }

    useEffect(()=>{
        getData();
    },[])

    let sno=1;
    const ShowData = data.map((key)=>{
        return(
            <tr align="center">
                <td>{sno++}</td>
                <td>{key.vehicleNumber}</td>
                <td>{key.vehicleType}</td>
                <td>{key.rcnumber}</td>
                <td>{key.vehicleOwnerName}</td>
                <td>{key.vehicleOwnerContact}</td>
                <td>{key.address}</td>
                <td>{key.flateOwnerName}</td>
                <td>{key.flatOwnerContact}</td>
                <td>{key.validDate}</td>
            </tr>  
        )
    })
    

    return(
        <>

     <Table striped bordered hover responsive="lg">
         <thead>
        <tr>
          <th>S.No</th>
            <th>Vehicle Number</th>
            <th>Vehicle Type</th>
            <th>RC Number</th>
            <th>Vehicle Owner Name</th>
            <th>Vehicle Owner Contact</th>
            <th>Address</th>
            <th>Flat Owner Name</th>
            <th>Flat Owner Contact</th>
            <th>Valid Date</th>
        </tr>
      </thead>
        <tbody>
        {ShowData}
        </tbody>
    </Table>

        
        </>
    )
}
export default Display;