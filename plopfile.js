const plopConfig = require('./plopConfig');

module.exports = plop => {
  plopConfig.helpers(plop);
  plop.setGenerator('component', {
    desrciption: 'Create a component',
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
    ],
    actions: [
      '------------------------------',
      'Generating a new component...',
      '------------------------------',
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components//{{pascalCase name}}/{{pascalCase name}}.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.ts',
        templateFile: 'plop-templates/Component/Component.test.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'plop-templates/Component/Component.styles.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/index.ts',
        templateFile: 'plop-templates/injectable-index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "import {{pascalCase name}} from './{{pascalCase name}}';",
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '\t{{pascalCase name}},',
      },
    ],
  });
  plop.setGenerator('page', {
    desrciption: 'Create a Page',
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
    ],
    actions: [
      '------------------------------',
      'Generating a new page...',
      '------------------------------',
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Page/Page.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.test.ts',
        templateFile: 'plop-templates/Page/Page.test.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'plop-templates/Page/Page.styles.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Page/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/index.ts',
        templateFile: 'plop-templates/injectable-index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/pages/index.ts',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "import {{pascalCase name}} from './{{pascalCase name}}';",
      },
      {
        type: 'append',
        path: 'src/pages/index.ts',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '\t{{pascalCase name}},',
      },
    ],
  });
  plop.setGenerator('service', {
    desrciption: 'Create service',
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
        path: 'src/services/{{camelCase name}}.ts',
        templateFile: 'plop-templates/service.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/services/index.ts',
        templateFile: 'plop-templates/injectable-index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/services/index.ts',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "import {{camelCase name}}{{camelCase type}} from './{{camelCase name}}';",
      },
      {
        type: 'append',
        path: 'src/services/index.ts',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '\t{{camelCase name}}{{camelCase type}},',
      },
    ],
  });
  plop.setGenerator('hook', {
    desrciption: 'Create Hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
      },
    ],
    actions: [
      '------------------------------',
      'Generating a new hook...',
      '------------------------------',
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}.ts',
        templateFile: 'plop-templates/hook.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/hooks/index.ts',
        templateFile: 'plop-templates/injectable-index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/hooks/index.ts',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "import {{camelCase name}} from './{{camelCase name}}';",
      },
      {
        type: 'append',
        path: 'src/hooks/index.ts',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '\t{{camelCase name}},',
      },
    ],
  });
};
