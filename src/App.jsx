import ContactList from "./Components/ContactList/ContactList";
import Container from "./Util/Container";

const App = () => {
  return (
    <Container>
      <h1>Lista de Contatos</h1>
      <ContactList />
    </Container>
  );
};

export default App;