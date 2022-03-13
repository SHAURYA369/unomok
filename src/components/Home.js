
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate();
  return (
    <div className="App" style={{justifyContent:"center"}}>
      <div id="head" style={{fontSize:'100px'}}> Welcome to Unomok :)</div>
      <div style={{marginLeft:"170px"}}>
      <Button size="large" variant="contained" style={{height:"60px",width:"150px",margin:"70px",alignItems:"center",justifyContent:"center"}} onClick={()=>{
          navigate("/create");
      }}>Create</Button>
      <Button size="large" variant="contained" style={{height:"60px",width:"150px",margin:"70px",alignItems:"center",justifyContent:"center"}} onClick={()=>{
          navigate("/view");}}>View</Button>
    </div>
    </div>
  );
}

export default Home;
