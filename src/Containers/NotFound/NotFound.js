import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {textAlign: "center"},
  status: {fontSize: 96, marginBottom: 20}
}

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.status}>404</h1>
      <p>Упс, вы кажется потерялись. Вот вам <Link to="/">ссылочка на главную страничку.</Link></p>
    </div>
  );
};

export default NotFound;