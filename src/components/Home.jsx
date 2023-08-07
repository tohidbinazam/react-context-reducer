import React, { useReducer } from 'react'
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { initialStudent, studentReducer } from '../reducers/studentReducer';

const Home = () => {


    const [ studentState, dispatch ] = useReducer( studentReducer, initialStudent )

  return (
    <div className="Home my-5">
      <Container>
        <Row className='justify-content-center'>
          <Col md='5'>
            <Card className='shadow'>
                <Card.Header> Student Data </Card.Header>
                <Card.Body>
                  { studentState.alert && <Alert variant='danger'>Alert is on</Alert> }

                  <input type="text" value={ studentState.name } className="form-control" onChange={ e => dispatch({ type: 'STU_DATA', payload: { name: e.target.value } })}  placeholder='Give your name'/>
                  <br />
                  <input type="email" value={ studentState.email } className="form-control" onChange={ e => dispatch({type: 'STU_DATA', payload: { email: e.target.value } })} placeholder='Give your E-mail'/>
                  <br />
                  <input type="tel" value={ studentState.cell } className="form-control" onChange={ e => dispatch({type: 'STU_DATA', payload: { cell: e.target.value } })} placeholder='Give your number'/>
                  <br />
                  <select className='form-select' onChange={e => dispatch({type: 'ALERT', payload: { alert : e.target.value }})}>
                    <option value="OFF">OFF</option>
                    <option value="ON">ON</option>
                  </select>
                </Card.Body>
                <Card.Footer>
                    <h5> Name: { studentState.name }</h5>
                    <h5> E-mail: { studentState.email }</h5>
                    <h5> Number: { studentState.cell }</h5>
                </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home