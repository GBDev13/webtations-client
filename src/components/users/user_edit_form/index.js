import { useState, useEffect } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import UserService from '../../../services/users';

const UsersEditForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const initializeUser = async () => {
    const user = await JSON.parse(localStorage.getItem('user'));
    setName(user['name']);
    setEmail(user['email']);
  }

  useEffect(() => {
    initializeUser()
  }, [])

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UserService.update({ email: email, name: name });
      setStatus("success")
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Field>
          <Control>
            <Label className="has-text-grey">Nome</Label>
            <Input
              type="name"
              value={name || ""}
              onChange={e => setName(e.target.value)}
              required
              name="name"
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label className="has-text-grey">Email</Label>
            <Input
              type="email"
              value={email || ""}
              onChange={e => setEmail(e.target.value)}
              required
              name="email"
            />
          </Control>
        </Field>

        <Field>
          <Control>
            <Column.Group>
              <Column className="has-text-right">
                <Button color="custom-purple" outlined>Atualizar</Button>
              </Column>
            </Column.Group>
          </Control>
        </Field>
        {status == "error" &&
          <Help color="danger">Erro ao atualizar</Help>
        }
        {status == "success" &&
          <Help color="primary">Atualizado com sucesso</Help>
        }
      </form>
    </>
  )


}

export default UsersEditForm;