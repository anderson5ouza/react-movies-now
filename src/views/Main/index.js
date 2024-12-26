import React, {Component} from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../../components/NavBar';

class index extends Component {
    state = {  }

    render() {
        return (
            <>
                <NavBar></NavBar>
                <Container style={{
                    paddingTop:30,
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    minWidth:300
                }}>
                    <h1 style={{
                        color:'#FFF',
                        marginTop:20,
                        paddingBottom:20
                    }}>Movies Now</h1>
                    
                    <Col>
                        <Row style={{
                            display:'flex',
                            justifyContent:'center'
                        }}>
                        
                            <Card style={{ width:250, margin:10 }}>
                                <Card.Img 
                                    variant="top" 
                                    style={{
                                        width:200,
                                        height:300,
                                        alignSelf:'center',
                                        paddingTop:20,
                                        cursor:'pointer'
                                    }}
                                    src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/12/47/20181896.jpg" 
                                />
                                <Card.Body style={{
                                    display:'flex',
                                    flexDirection: 'column',
                                    justifyContent:'space-between'
                                }}>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text style={{
                                        fontSize:12
                                    }}>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button 
                                        style={{
                                            display:'inline-block'
                                        }}
                                        variant="outline-dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width:250, margin:10 }}>
                                <Card.Img 
                                    variant="top" 
                                    style={{
                                        width:200,
                                        height:300,
                                        alignSelf:'center',
                                        paddingTop:20,
                                        cursor:'pointer'
                                    }}
                                    src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/12/47/20181896.jpg" 
                                />
                                <Card.Body style={{
                                    display:'flex',
                                    flexDirection: 'column',
                                    justifyContent:'space-between'
                                }}>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text style={{
                                        fontSize:12
                                    }}>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button 
                                        style={{
                                            display:'inline-block'
                                        }}
                                        variant="outline-dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width:250, margin:10 }}>
                                <Card.Img 
                                    variant="top" 
                                    style={{
                                        width:200,
                                        height:300,
                                        alignSelf:'center',
                                        paddingTop:20,
                                        cursor:'pointer'
                                    }}
                                    src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/12/47/20181896.jpg" 
                                />
                                <Card.Body style={{
                                    display:'flex',
                                    flexDirection: 'column',
                                    justifyContent:'space-between'
                                }}>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text style={{
                                        fontSize:12
                                    }}>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button 
                                        style={{
                                            display:'inline-block'
                                        }}
                                        variant="outline-dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                        </Row>
                    </Col>
                </Container>  
            </>
        );
    }
}

export default index;