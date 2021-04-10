import React from 'react';
import Button from '../components/Button';
import Col from '../components/Col';
import Input from '../components/Input';
import Panel from '../components/Panel';
import Row from '../components/Row';

const Login = (props) => {
    return (
        <div>
            <Panel>
                <Col>
                    <Input label='Login' />
                    <Input label='Password' />
                    <Row>
                        <Button value='Register'/>
                        <Button value='Log in' theme='success'/>
                    </Row>
                </Col>
            </Panel>
        </div>
    )
}

export default Login;