import React from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import Section from './component/Section'

const App = () => {
  const users = [
    {
      id: 1,
      name: 'John',
      lastName: 'Doe',
      age: 30
    },
    {
      id: 2,
      name: 'Jane',
      lastName: 'Smith',
      age: 25
    },
    {
      id: 3,
      name: 'Alice',
      lastName: 'Johnson',
      age: 35
    }
  ];

  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App
