import './App.css'; // css정보를 가져옴.
import { Nav, Container, Row, Col } from 'react-bootstrap'; // bootstrap에서 가져옴.
import { useState } from 'react'; // react에서 useState를 가져옴.
import { data } from './Data.js'; // Data파일에서 정보를 가져옴.
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import Introduce from './pages/Introduce.js';
import Apply from './pages/Apply.js';
import MadeBy from './pages/MadeBy.js';

function App() {


  let [count, setCount] = useState(0);
  let [clubs, setClubs] = useState(data);


  return (
    <div className="App">
      <div className="main-bg" />


      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/"> 홈 </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/만든사람"> 만든사람 </Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        <Route path="/" element={
          <div>
            <Container>
              <Row>
                {clubs.map((a, i) => {
                  return (
                    <Col>
                      <ClubCard clubs={clubs[i]} i={i}></ClubCard>
                    </Col>
                  )
                })}
              </Row>
            </Container>
          </div>} />
        {
          clubs.map((a, i) => {
            return (
              <Route path={`/동아리지원${i}`} element={<Apply clubs={clubs[i]} i={i}></Apply>}></Route>
            )
          })
        }

        {
          clubs.map((a, i) => {
            return (
              <Route path={`/동아리소개${i}`} element={<Introduce clubs={clubs[i]} i={i}></Introduce>}></Route>
            )
          })
        }
        <Route path="/만든사람" element={<MadeBy></MadeBy>}></Route>
        <Route path="*" element={<div> 잘못된 페이지에 접속함 </div>}></Route>
      </Routes>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </div>
  );
}


function ClubCard(props) {
  let navigate = useNavigate();
  return (
    <div className="ClubCard">
      <img onClick={() => navigate(`/동아리소개${props.clubs.id}`)} src={"/img/잔망루피" + (props.clubs.id) + ".png"} ></img>
      <h4>{props.clubs.name}</h4>
      <p>{props.clubs.description}</p>
    </div>
  )
}



export default App;
