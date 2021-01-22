import { useState } from 'react';
import { Button } from "rbx";
import UserService from '../../../services/users';
import { Redirect } from "react-router-dom";

function UsersDelete() {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const deleteUser = async () => {
    if (window.confirm('Você tem certeza que deseja deletar esta conta? (Perderá toda suas notas criadas permanentemente)')) {
      await UserService.delete()
      setRedirectToHome(true)
    }
  }

  if (redirectToHome === true)
    return <Redirect to={{ pathname: "/" }} />

  return (
    <Button color="danger" onClick={() => deleteUser()}>
      Excluir conta
    </Button>
  )
}

export default UsersDelete;