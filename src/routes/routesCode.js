const routes = {
  planets: {
    path: '/',
    title: 'Planets',
    exact: true,
  },
  signIn: {
    path: '/signIn',
    title: 'Sign In',
    exact: true,
  },
  planet: {
    path: '/planets/:id',
    title: 'Planet',
    exact: true,
  },
};

export default routes;
