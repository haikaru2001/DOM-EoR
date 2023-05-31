const {
    getScenariosHandler,
    getScenarioByIdHandler,
    saveScenarioHandler,
    updateScenarioHandler,
    deleteScenarioHandler,
  } = require('./handler.js');
  
  const routes = [
    {
      method: 'GET',
      path: '/api/scenarios',
      handler: getScenariosHandler,
    },
    {
      method: 'GET',
      path: '/api/scenarios/{id}',
      handler: getScenarioByIdHandler,
    },
    {
      method: 'POST',
      path: '/api/scenarios',
      handler: saveScenarioHandler,
    },
    {
      method: 'PUT',
      path: '/api/scenarios/{id}',
      handler: updateScenarioHandler,
    },
    {
      method: 'DELETE',
      path: '/api/scenarios/{id}',
      handler: deleteScenarioHandler,
    },
  ];
  
  module.exports = routes;
  