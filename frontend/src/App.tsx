import axios from 'axios';
import { BASE_URL } from './constant';

function App() {
  const getBlogs = () => {
    axios
      .get(`${BASE_URL}/blogs`)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <div
      onClick={() => {
        getBlogs();
      }}
    >
      React App
    </div>
  );
}

export default App;
