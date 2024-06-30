import National from './Pages/National';
import Kanto from './Pages/Kanto';
import Johto from './Pages/Johto';
import Hoenn from './Pages/Hoenn';
import Sinnoh from './Pages/Sinnoh';
import Unova from './Pages/Unova';
import Kalos from './Pages/Kalos';
import Alola from './Pages/Alola';
import Galar from './Pages/Galar';
import Paldea from './Pages/Paldea';
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
      {
        path: '/sinnoh',
        element: <Sinnoh />,
        errorElement: <Error />,
      },
      {
        path: '/unova',
        element: <Unova />,
        errorElement: <Error />,
      },
      {
        path: '/kalos',
        element: <Kalos />,
        errorElement: <Error />,
      },
      {
        path: '/alola',
        element: <Alola />,
        errorElement: <Error />,
      },
      {
        path: '/galar',
        element: <Galar />,
        errorElement: <Error />,
      },
      {
        path: '/paldea',
        element: <Paldea />,
        errorElement: <Error />,
      },
    ],
  },
];

export default routes;
