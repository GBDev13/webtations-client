import { useState } from 'react';
import HeaderLogged from '../../../components/header_logged';
import Notes from "../../../components/notes";

const NotesScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderLogged setIsOpen={setIsOpen} />
      <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
        Hello World
    </>
  )
};

export default NotesScreen;