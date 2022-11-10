import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import { Nav, Container, Row, Col } from 'react-bootstrap'; // bootstrap에서 가져옴.
import { data } from '../Data.js'; // Data파일에서 정보를 가져옴.
import { App } from '../App.js';


function Introduce(props) {
    let navigate = useNavigate();

    return (
        <Container>
            <br></br>
            <Row className="justify-content-md-center">
                <Col>
                    <br /><br />
                    동아리 소개 페이지입니다
                    <br /><br />
                </Col>
            </Row>

            <Row>
                <Col>
                    <br /><br />
                    <img src={"/img/잔망루피" + (props.i) + ".png"}></img>
                    <br /><br />
                </Col>
            </Row>
            <Row>
                <Col>
                    <br /><br />
                    동아리명 : {props.clubs.name}
                    <br /><br />
                </Col>
            </Row>
            <Row>
                <Col>
                    <br /><br />
                    카테고리 : {props.clubs.category}
                    <br /><br />
                </Col>
            </Row>
            <Row>
                <Col>
                    <br /><br />
                    동아리 소개 : {props.clubs.description}
                    <br /><br />
                </Col>
            </Row>
            <Row>
                <Col>
                    <br /><br />
                    동아리 시작연도 : {props.clubs.yearOfCreate}
                    <br /><br />
                </Col>
            </Row>
            <Row>
                <Col>
                    <br /><br />
                    동아리 회장 : {props.clubs.clubPresident}
                    <br /><br />
                </Col>
            </Row>
            <Row>
                <Col>
                    <br /><br />
                    동아리 전화번호 : {props.clubs.PhoneNumber}
                    <br /><br />
                </Col>
            </Row>
            <Row>
                <Col>
                    <br /><br />
                    <Link to={`/동아리지원${props.clubs.id}`}>
                        <button>동아리 지원하기</button>
                    </Link>
                    <br /><br />
                </Col>
            </Row>
        </Container>
    )
}


export default Introduce;