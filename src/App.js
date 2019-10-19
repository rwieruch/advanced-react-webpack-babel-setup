import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const App = ({ title }) => (
  <div className={styles.title}>{title}</div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
