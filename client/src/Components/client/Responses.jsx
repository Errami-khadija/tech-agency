import { Card, Button, Typography } from "@material-tailwind/react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Login from "../auth/Login";
import { useCookies } from 'react-cookie'


export function Responses() {
  const [orders, setOrders] = useState([])
  const [selectedId, setSelectedId] = useState(null);


  useEffect(() => {
    const username = localStorage.getItem('username'); // Retrieve username from local storage

    if (username) {
      axios.get(`https://tech-agency.onrender.com/ordersUser?username=${username}`)
        .then((res) => {
          setOrders(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const accept = (order) => {
    if (order.statut == "rejected by Admin" || order.statut == "rejected by Client" || (order.price == 0 && order.duration == 0)) {
      alert("Can't accept")
    } else {
      axios.put("https://tech-agency.onrender.com/acceptByClient", {
        statut: "accepted by Client",
        id: order._id
      }).then(window.location.href = "http://localhost:5173/sidebar/responses")
    }

  }

  const refuse = (order) => {
    if (order.price == 0 && order.duration == 0 || order.statut == "rejected by Admin") {
      alert("Can't refuse Order ! ")
    } else {
      axios.put("https://tech-agency.onrender.com/refuseByClient", {
        statut: "rejected by Client",
        id: order._id
      })
        .then(window.location.href = "http://localhost:5173/sidebar/responses")
    }
  }

  const [cookies, setCookies] = useCookies("access_token")

  return (
    <>
      <div className="flex flex-col">
        {
          cookies.access_token
            ?
            <div className="flex flex-col w-full">
              <Card className="bg-gradient-to-br from-blue-gray-800 to-blue-gray-900"  >
                <table className="w-full  table-auto m-5">
                  <thead>
                    <tr>
                      {["Project Subject", "Duration", "Price", "statut", "Action"].map((el) => (
                        <th
                          key={el}
                          className="border-b border-blue-gray-50 py-3 px-7 text-left whitespace-nowrap"
                        >
                          <Typography variant="small" className="text-[11px] font-bold uppercase text-gray-50">
                            {el}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id} className="m-1 text-gray-50">
                        <td>{order.subject}</td>
                        <td>{order.duration}</td>
                        <td>{order.price}</td>
                        <td>{order.statut}</td>
                        <td className="flex flex-row">
                          <Button onClick={() => { accept(order) }} className="accept m-2" color="green" >
                            Accept
                          </Button>

                          <Button onClick={() => { refuse(order) }} className="refuse m-2 " color="red">
                            Refuse
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
            : <Login />
        }
      </div>
    </>);
}

export default Responses;