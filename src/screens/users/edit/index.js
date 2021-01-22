import HeaderLogged from "../../../components/header_logged"
import { Column, Section, Title, Container, Card } from "rbx";
import '../../../styles/users.scss';
import UsersEditForm from '../../../components/users/user_edit_form';
import UsersEditFormPassword from '../../../components/users/user_edit_password_form';
import UsersDelete from '../../../components/users/user_delete';

const UsersEditScreen = () => {

  return (
    <>
      <HeaderLogged />
      <Section size="medium" className="users">
        <Container>
          <Column.Group centered className="users-edit">
            <Column size={4}>
              <Title size={5} className="has-text-grey has-text-left">
                Informações Pessoais
            </Title>
              <Card>
                <Card.Content>
                  <UsersEditForm />
                </Card.Content>
              </Card>
            </Column>
          </Column.Group>

          <Column.Group centered className="users-edit">
            <Column size={4}>
              <Title size={5} className="has-text-grey has-text-left">
              </Title>
              <Card>
                <Card.Content>
                  <UsersEditFormPassword />
                </Card.Content>
              </Card>
            </Column>
          </Column.Group>
          <Column.Group centered>
            <Column size={4} className="has-text-right">
              <UsersDelete />
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </>
  )
};

export default UsersEditScreen;