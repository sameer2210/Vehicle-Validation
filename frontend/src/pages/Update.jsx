import { useEffect, useState } from "react";
import BASE_URL from "../components/BASE_URL";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';


const Update=()=>{

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
    },[data])

    let sno=1;
    const ShowData = data.map((key)=>{
        return(
            <tr align="center">
                <td>{sno++}</td>
                <td>{key.vehicleNumber}</td>
                <td>{key.vehicleType}</td>
                <td>{key.vehicleOwnerName}</td>
                <td>{key.vehicleOwnerContact}</td>
                <td>{key.address}</td>
                <td>{key.flateOwnerName}</td>
                <td>{key.flatOwnerContact}</td>
                <td>{key.validDate}</td>
                <td style={{color:"red",fontSize:"25px"}}>
                <MdDelete onClick={()=>deleteData(key._id)}/>
                </td>
            </tr>  
        )
    })
    

    const deleteData=async(id)=>{
        const api = `${BASE_URL}/vehicle/delete/?id=${id}`;
        const response = await axios.get(api); 
        toast.success(response.data.message);
    }


    return(
        <>

     <Table striped bordered hover responsive="lg">
         <thead>
        <tr>
          <th>S.No</th>
            <th>Vehicle Number</th>
            <th>Vehicle Type</th>
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

        <ToastContainer/>
        </>
    )
}
export default Update;