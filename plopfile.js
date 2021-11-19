/* eslint-disable prettier/prettier */
const plopConfig = require('./plopConfig');
const path = require("path");
const isCorrectExtension = value => {
  return value => {
    if (!(['ts','tsx','js','jsx']).includes(value)) return `\n${value} is not a correct extension please try to use \n1-js\n2-ts\n3-jsx\n4-tsx`;
    return true
  }
}
module.exports = plop => {
  plopConfig.helpers(plop);
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?',
      },
      {
        type: 'input',
        name: 'extension',
        message: 'Select the extension',
        validate: isCorrectExtension('extension'),
        // default: plopConfig.defaultExtensionType,
        // choices: () => plopConfig.availableExtensions('*'),
      },
    ],
    actions: [
      '------------------------------',
      'Generating a new component...',
      '------------------------------',
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components//{{pascalCase name}}/{{pascalCase name}}.{{extension}}',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component/Component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.{{extensionSplit extension}}',
        templateFile: 'plop-templates/Component/Component.test.hbs',
      },
      {
        type: 'add',
        path:'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.{{extensionSplit extension}}',
        templateFile: 'plop-templates/Component/Component.styles.hbs',
      },
      {
        type: 'add',
        path:'src/components/{{pascalCase name}}/index.{{extensionSplit extension}}',
        templateFile: 'plop-templates/Component/index.hbs',
      },
      {
        type: 'add',
        path:'src/components/index.{{extensionSplit extension}}',
        templateFile: 'plop-templates/injectable-index.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path:'src/components/index.{{extensionSplit extension}}',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "import {{pascalCase name}} from './{{pascalCase name}}';",
      },
      {
        type: 'append',
        path:'src/components/index.{{extensionSplit extension}}',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '\t{{pascalCase name}},',
      },
    ],
  });
  plop.setGenerator('page', {
    description: 'Create a Page',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your Page name?',
      },
      {
        type: 'input',
        name: 'extension',
        message: 'Select the extension',
        validate: isCorrectExtension('extension'),
      },
    ],
    actions: [
      '------------------------------',
      'Generating a new page...',
      '------------------------------',
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.{{extension}}',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Page/Page.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.test.{{extensionSplit extension}}',
        templateFile: 'plop-templates/Page/Page.test.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.styles.{{extensionSplit extension}}',
        templateFile: 'plop-templates/Page/Page.styles.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/index.{{extensionSplit extension}}',
        templateFile: 'plop-templates/Page/index.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/index.{{extensionSplit extension}}',
        templateFile: 'plop-templates/injectable-index.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/pages/index.{{extensionSplit extension}}',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "import {{pascalCase name}} from './{{pascalCase name}}';",
      },
      {
        type: 'append',
        path: 'src/pages/index.{{extensionSplit extension}}',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '\t{{pascalCase name}},',
      },
    ],
  });
  plop.setGenerator('service', {
    description: 'Create service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?',
      },
      {
        type: 'confirm',
        name: 'isParams',
        default: false,
        message: 'Do you want to use Params inside your service?',
      },
      {
        type: 'input',
        name: 'extension',
        message: 'Select the extension',
        validate: isCorrectExtension('extension'),
      },
      {
        type: 'list',
        name: 'type',
        message: 'Select the type of service you want to create ?',
        default: plopConfig.defaultServiceType,
        choices: () => plopConfig.availableTypes(),
      },
    ],
    actions: [
      '------------------------------',
      'Generating a new service...',
      '------------------------------',
      {
        type: 'add',
        path: 'src/services/{{camelCase name}}.{{extension}}',
        templateFile: 'plop-templates/service.hbs',
      },
      {
        type: 'add',
        path: 'src/services/index.{{extension}}',
        templateFile: 'plop-templates/injectable-index.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/services/index.{{extension}}',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template:
          "import {{camelCase name}}{{camelCase type}} from './{{camelCase name}}';",
      },
      {
        type: 'append',
        path: 'src/services/index.{{extension}}',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '\t{{camelCase name}}{{camelCase type}},',
      },
    ],
  });
  plop.setGenerator('hook', {
    description: 'Create Hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
      },
      {
        type: 'input',
        name: 'extension',
        message: 'Select the extension',
        validate: isCorrectExtension('extension'),
      },
    ],
    actions: [
      '------------------------------',
      'Generating a new hook...',
      '------------------------------',
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}.{{extension}}',
        templateFile: 'plop-templates/hook.hbs',
      },
      {
        type: 'add',
        path: 'src/hooks/index.{{extension}}',
        templateFile: 'plop-templates/injectable-index.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/hooks/index.{{extension}}',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "import {{camelCase name}} from './{{camelCase name}}';",
      },
      {
        type: 'append',
        path: 'src/hooks/index.{{extension}}',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '\t{{camelCase name}},',
      },
    ],
  });
  plop.setGenerator('reducer', {
    description: 'Create reducer',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your reducer name?',
      },
      {
        type: 'input',
        name: 'extension',
        message: 'Select the extension',
        validate: isCorrectExtension('extension'),
      },
    ],
    actions: [
      '------------------------------',
      'Generating a new reducer...',
      '------------------------------',
      {
        type: 'add',
        path: 'src/store/{{camelCase name}}/types.{{extension}}',
        templateFile:
          'plop-templates/Store/StoreModule/StoreModule.types.hbs',
      },
      {
        type: 'add',
        path: 'src/store/{{camelCase name}}/action.{{extension}}',
        templateFile:
          'plop-templates/Store/StoreModule/StoreModule.action.hbs',
      },
      {
        type: 'add',
        path: 'src/store/{{camelCase name}}/reducer.{{extension}}',
        templateFile:
          'plop-templates/Store/StoreModule/StoreModule.reducer.hbs',
      },
      {
        type: 'add',
        path: 'src/store/index.{{extension}}',
        templateFile: 'plop-templates/Store/injectable-index.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/store/index.{{extension}}',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template:
          "import {{pascalCase name}}Reducer from './{{camelCase name}}/reducer';",
      },
      {
        type: 'append',
        path: 'src/store/index.{{extension}}',
        pattern: '/* PLOP_IMPORT_USE */',
        template: '\t{{pascalCase name}}Reducer,',
      },
    ],
  });
};
