import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import { Nav, Container, Row, Col } from 'react-bootstrap'; // bootstrap에서 가져옴.

function Apply(props) {
    return (
        <Container>
            <br></br>
            <Row className="justify-content-md-center">
                <Col>
                    <br /><br />
                    동아리 지원 페이지입니다
                    <br /><br />
                </Col>
            </Row>

            <Row>
                <Col>
                    <img src={"/img/잔망루피" + (props.i) + ".png"}></img>
                </Col>
            </Row>
            <Row>
                <Col>
                    동아리명 : {props.clubs.name}
                    <br /><br />
                </Col>
            </Row>
            <Row>
                <Col>
                    카테고리 : {props.clubs.category}
                    <br /><br />
                </Col>
            </Row>
            <Row>
                <Col>
                    동아리 소개 : {props.clubs.description}
                    <br /><br />
                </Col>
            </Row>
            <Row>
                <Col>
                    이름 : <input type="text"></input>
                    <br /><br />
                </Col>
            </Row>
            <Row>
                <Col>
                    학번 : <input type="text"></input>
                    <br /><br />
                </Col>
            </Row>
            <Row>
                <Col>
                    지원 동기 : <input type="text"></input>
                    <br /><br />

                </Col>
            </Row>
            <Row>
                <Col>
                    <input type="submit" value="제출"></input>
                </Col>
            </Row>
        </Container>
    )
}

export default Apply;