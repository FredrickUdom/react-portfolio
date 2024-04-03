import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pix2 from '../../assets/Home/pix2.jpg'
// import "./Section.css";

function Section() {
    return (
        <div id="about">
            <Container>
                <h2>About Me</h2>
                <Row>
                    <Col>
                    <img src={pix2} alt="picture here" srcset="" />
                    </Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Section;