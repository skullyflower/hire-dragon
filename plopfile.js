export default function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'Create component structure.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/component.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/index.tsx.hbs',
      },
    ],
  });
}
