import National from './Pages/National';
import Kanto from './Pages/Kanto';
import Johto from './Pages/Johto';
import Hoenn from './Pages/Hoenn';
import App from './Pages/App';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <National />,
      },
      {
        path: '/kanto',
        element: <Kanto />,
        errorElement: <Error />,
      },
      {
        path: '/johto',
        element: <Johto />,
        errorElement: <Error />,
      },
      {
        path: '/hoenn',
        element: <Hoenn />,
        errorElement: <Error />,
      },
    ],
  },
];

export default routes;
