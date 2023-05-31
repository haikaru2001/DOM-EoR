const { v4: uuidv4 } = require('uuid');
let scenarios = require('./scenarios');

// Handler untuk mendapatkan semua skenario
function getScenariosHandler(request, h) {
  return h.response(scenarios);
}

// Handler untuk mendapatkan skenario berdasarkan ID
function getScenarioByIdHandler(request, h) {
  const { id } = request.params;
  const scenario = scenarios.find((s) => s.id === id);

  if (!scenario) {
    return h.response('Scenario not found').code(404);
  }

  return h.response(scenario);
}

// Handler untuk menyimpan skenario baru
function saveScenarioHandler(request, h) {
  const { scenario } = request.payload;
  const id = nanoid();
  const newScenario = { id, ...scenario };
  scenarios.push(newScenario);
  return h.response(newScenario).code(201);
}

// Handler untuk mengupdate skenario berdasarkan ID
function updateScenarioHandler(request, h) {
  const { id } = request.params;
  const { scenario } = request.payload;
  const index = scenarios.findIndex((s) => s.id === id);

  if (index === -1) {
    return h.response('Scenario not found').code(404);
  }

  const updatedScenario = { id, ...scenario };
  scenarios[index] = updatedScenario;

  return h.response(updatedScenario);
}

// Handler untuk menghapus skenario berdasarkan ID
function deleteScenarioHandler(request, h) {
  const { id } = request.params;
  const index = scenarios.findIndex((s) => s.id === id);

  if (index === -1) {
    return h.response('Scenario not found').code(404);
  }

  scenarios.splice(index, 1);
  return h.response('Scenario deleted');
}

module.exports = {
  getScenariosHandler,
  getScenarioByIdHandler,
  saveScenarioHandler,
  updateScenarioHandler,
  deleteScenarioHandler,
};
