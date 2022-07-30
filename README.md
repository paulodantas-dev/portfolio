# portfolio

APP - https://portfolio-paulodantas-dev.vercel.app/

## 🛠 Skills

Javascript, TypeScript, ReactJS, Jest, Tailwind

## 🚀 About Me

I am a full-stack developer and javascript specialist.(M.E.R.N)
Feel free to take a look at my latest projects on my [portifolio page](https://portfolio-paulodantas-dev.vercel.app/)

## Used stack

**Front-end:** ReactJS + Typescript

**CSS:** tailwindcss

**Tests:** Jest, Testing-Library

## Installation / Execute

How to install and execute the project in LOCALHOST

```bash
    git clone https://github.com/paulodantas-dev/portfolio.git
    cd portfolio
    yarn / npm install
    yarn dev / npm run dev
```

## Execute Tests

How to execute tests the project in LOCALHOST

### To execute one test

```bash
    yarn test <nameFile>.test.tsx / npm run test <nameFile>.test.tsx
```

### To execute all tests

```bash
    yarn test / npm run test
```

### To execute one coverage

```bash
    yarn coverage <nameFile>.test.tsx / npm run coverage <nameFile>.test.tsx
```

### To execute all coverage

```bash
    yarn coverage / npm run coverage
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env

`NODE_ENV`

## Deploy

To deploy this project, run

```bash
  yarn build / npm run build
```

## Lib

- [@emailjs/browser](https://www.emailjs.com/)
- [chart.js](https://www.chartjs.org/)
- [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)
- [react-icons](https://github.com/react-icons/react-icons#readme)
- [react-toastify](https://github.com/fkhadra/react-toastify#readme)
- [react-router-dom](https://github.com/remix-run/react-router#readme)
- [jest](https://jestjs.io/)
- [@testing-library](https://github.com/testing-library/react-testing-library#readme)
- [tailwindcss](https://tailwindcss.com/)
- [typescript](https://www.typescriptlang.org/)
- [vite](https://github.com/vitejs/vite/tree/main/#readme)

## Functionalities

- Full Responsive
- Tests 100% coverage
- Mode Suspense Lazy Loading

## Exemples

How to send Email from contact form

```javascript
const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  setIsLoading(true);
  try {
    sendForm(
      'service_cw9wqke',
      'template_itd9yba',
      formRef.current || '',
      'N_TbVot3s9W8-Wdnw'
    ).then(
      (result) => {
        if (result.status === 200) {
          setIsModalContact(false);
          setIsLoading(false);
          toast.success('Message sent!');
        }
      },
      (error) => {
        setIsLoading(false);
        toast.error(error.text);
      }
    );
  } catch (error) {
    setIsLoading(false);
    alert(error);
  }
}, []);
```

How structure folder looks like

```javascript
/////.../////
--- src
----components
/////.../////
-----ProjectCard
------__tests__
-------ProjectCard.test.tsx
-------ProjectCardView.test.tsx
------ProjectCard.tsx
------ProjectCardView.tsx
------ProjectCard.types.ts
------ProjectCardView.types.ts
------ProjectCard.styles.ts
------ProjectCardView.styles.ts
----pages
/////.../////
-----project
------__tests__
-------Project.test.tsx
-------ProjectView.test.tsx
------Project.tsx
------ProjectView.tsx
------Project.types.ts
------ProjectView.types.ts
------Project.styles.ts
------ProjectView.styles.ts
/////.../////
```

How to configure jest to run tests in the project

```javascript
{
  clearMocks: true,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/jestSetup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testRegex: '((\\.|/*.)(test))\\.[tj]sx?$',
  moduleDirectories: ['node_modules', './src'],
  coverageDirectory: 'coverage',
  coverageReporters: ['cobertura', 'html', 'lcov', 'text-summary', 'text'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/main.tsx',
    '!src/utils/Constants.ts',
    '!src/routes/routes.tsx',
    '!src/App.tsx',
    '!src/**/*.types.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      lines: 90,
      functions: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|svg)$': '<rootDir>/config/mocks/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/config/mocks/cssMock.ts',
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: './coverage/',
        outputName: 'junit.xml',
        classNameTemplate: '{classname} - {title}',
        titleTemplate: '{classname} - {title}',
        ancestorSeparator: ' > ',
        usePathForSuiteName: 'true',
      },
    ],
  ],
  preset: 'ts-jest',
  coverageProvider: 'v8',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
}
```

## Screenshots

![App Screenshot1](https://github.com/paulodantas-dev/portfolio/blob/main/src/assets/1.png)
![App Screenshot2](https://github.com/paulodantas-dev/portfolio/blob/main/src/assets/2.png)
![App Screenshot3](https://github.com/paulodantas-dev/portfolio/blob/main/src/assets/3.png)
![App Screenshot4](https://github.com/paulodantas-dev/portfolio/blob/main/src/assets/4.png)
![App Screenshot5](https://github.com/paulodantas-dev/portfolio/blob/main/src/assets/5.png)

## Feedback

If you have any feedback, please let me know via paulodantasbjr@gmail.com
