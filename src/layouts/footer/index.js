import React from 'react';
import { Container } from 'react-bootstrap';


const FooterComponent = () => {
  return (

    <footer className="footer mt-auto py-3 bg-transparent">
      <Container>
        <span className="text-muted">© 2024 <a href='#'>WinVinaya InfoSystems</a></span>
      </Container>
    </footer>
  );
};

export default FooterComponent;
