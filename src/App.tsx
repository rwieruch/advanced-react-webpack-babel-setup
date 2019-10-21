import React from 'react';

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = ({ title }) => <div>{title}</div>;

export default App;
