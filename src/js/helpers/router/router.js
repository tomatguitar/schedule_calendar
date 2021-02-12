const router = async (routes) => {
  const pathToRegex = (path) =>
    new RegExp(`^${path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)')}$`);

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    const obj = {
      route: route,
      result: window.location.pathname.match(pathToRegex(route.path)),
    };
    return obj;
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [window.location.pathname],
    };
  }
  /* eslint new-cap: ["error", { "properties": false }] */
  const { view } = match.route;

  await view.render();
};

export default router;
