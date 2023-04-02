import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormUserData() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite seu nome" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCpf">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="text" placeholder="Digite seu CPF" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDateBirth">
          <Form.Label>Data de Nascimento</Form.Label>
					<Form.Control type="date" />
        </Form.Group>

      </Row>
    </Form>
  );
}

export default FormUserData;