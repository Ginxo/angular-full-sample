/**
 * Created by yduartep on 3/2/2017.
 */
module.exports = function () {
  var faker = require("faker");

  return {
    heroes: [
      { id: 1, name: 'Spider-Man', editorial: 1, image: 'spider-man.PNG' },
      { id: 2, name: 'Iron Man', editorial: 1, image: 'iron-man.PNG' },
      { id: 3, name: 'Captain America', editorial: 1, image: 'captain-america.PNG' },
      { id: 4, name: 'Deadpool', editorial: 1, image: 'deadpool.PNG' },
      { id: 5, name: 'Hulk', editorial: 1, image: 'hulk.PNG' },
      { id: 6, name: 'Thor', editorial: 1, image: 'thor.PNG' },
      { id: 7, name: 'Flash', editorial: 2, image: 'flash.PNG' },
      { id: 8, name: 'Batman', editorial: 2, image: 'batman.PNG' },
      { id: 9, name: 'Wonder Woman', editorial: 2, image: 'wonder-woman.PNG' },
      { id: 10, name: 'Superman', editorial: 2, image: 'superman.PNG' },
      { id: 11, name: 'Cyborg', editorial: 2, image: 'cyborg.PNG' }
    ],
    villains: [
      { id: 1, name: 'Magneto', editorial: 1, image: 'magneto.PNG' },
      { id: 2, name: 'Venon', editorial: 1, image: 'venon.PNG' },
      { id: 3, name: 'Ultron', editorial: 1, image: 'ultron.PNG' },
      { id: 4, name: 'Joker', editorial: 2, image: 'joker.PNG' },
      { id: 5, name: 'R\'as Al Ghul', editorial: 2, image: 'rasalghul.PNG' },
      { id: 6, name: 'Mr. Freeze', editorial: 2, image: 'freeze.PNG' },
      { id: 7, name: 'Scarecrow', editorial: 2, image: 'scarecrow.PNG' }
    ],
    process: [
      {executionId: '1', processInstanceId: '1', processKey: 'processKey1', processDefinitionId: 'processDefinitionId1',
        diagramURL: 'imagen_url', tenantId: '', activity: '', tasks: [], processVariables: ''},
      {executionId: '2', processInstanceId: '2', processKey: 'processKey2', processDefinitionId: 'processDefinitionId2',
        diagramURL: 'imagen_url', tenantId: '', activity: '', tasks: [], processVariables: ''},
      {executionId: '3', processInstanceId: '3', processKey: 'processKey3', processDefinitionId: 'processDefinitionId3',
        diagramURL: 'imagen_url', tenantId: '', activity: '', tasks: [], processVariables: ''},
      {executionId: '4', processInstanceId: '4', processKey: 'processKey4', processDefinitionId: 'processDefinitionId4',
        diagramURL: 'imagen_url', tenantId: '', activity: '', tasks: [], processVariables: ''},
      {executionId: '5', processInstanceId: '5', processKey: 'processKey5', processDefinitionId: 'processDefinitionId5',
        diagramURL: 'imagen_url', tenantId: '', activity: '', tasks: [], processVariables: ''}
    ],
    token: [{
      "id": faker.random.uuid(),
      "access_token": "a61afd98-8e9e-4f16-9366-31abcc0bb522",
      "token_type": "bearer",
      "refresh_token": "2df39865-27c2-41f3-b676-69c9839b9d50",
      "expires_in": 43199,
      "scope": "openid"
    }]
  }
}
