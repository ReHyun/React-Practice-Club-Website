import { Container, Row, Col } from 'react-bootstrap';


function MadeBy(props) {
    return (
        <div>
            <Container>
                <br></br>
                <Row className="justify-content-md-center">
                    <Col>
                        <br /><br />
                        만든 사람 : 임재현
                        <br /><br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br /><br />
                        <a href="https://github.com/ReHyun" target="blank"><img src="/img/Github_logo.png" /></a>
                        <a href="https://www.instagram.com/rehyun10_03/" target="blank"><img src="/img/Instargram_logo.png" /></a>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}


export default MadeBy;