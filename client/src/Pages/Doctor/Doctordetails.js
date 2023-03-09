import './Doctordetails.css';
import React from 'react';
import { useParams } from 'react-router-dom';
const Doctordetails = () => {
    // const [lists, setList] = useState([]);
    const [datalist, setDatalist] = useState([]);
    const {id}=useParams();

    useEffect(() => {
      axios
        .get("http://localhost:8000/api/doctor/")
        .then((response) => {
          setDatalist(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return (
      <div>
        {datalist.map((list) => {
          if (list.id !== {id}) {
            console.log(list.id, {id});
          }

          // return(
          //   <div>
          //     <h1>{list.username}</h1>
          //     <p>{list.email}</p>
          //     <p>{list.contact}</p>
          //     {console.log("xcvbnm,")}
          //     {console.log(list)}
          //   </div>
          //   )
        })}
      </div>
    );
}

export default Doctordetails;
