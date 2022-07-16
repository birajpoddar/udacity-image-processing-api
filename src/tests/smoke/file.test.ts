import fs from 'fs';
const pack = './package.json';
const packLog = './package-lock.json';
const lint = './.eslintrc';
const pretty = './.prettierrc';
const prettyIg = './.prettierignore';
const gitDir = './.git';
const gitIg = './.gitignore';
const readMe = './README.md';
const tsConfig = './tsconfig.json';
const srcDir = './src';
const entryFile = './src/server.ts';
const jasmineDir = './spec/support';
const jasmine = './spec/support/jasmine.json';
const jasmineReporter = './src/tests/helpers/reporter.ts';
const nodeDir = './node_modules';

const fileTests = describe('Important File Exists', () => {
  describe('Package File Tests', () => {
    it('expects package.json exists', () => {
      const flag = fs.existsSync(pack);
      expect(flag).toBeTrue();
    });

    it('expects package-lock.json exists', () => {
      const flag = fs.existsSync(packLog);
      expect(flag).toBeTrue();
    });
  });

  describe('Eslint File Tests', () => {
    it('expects .eslintrc exists', () => {
      const flag = fs.existsSync(lint);
      expect(flag).toBeTrue();
    });
  });

  describe('Prettier File Tests', () => {
    it('expects .prettierrc exists', () => {
      const flag = fs.existsSync(pretty);
      expect(flag).toBeTrue();
    });

    it('expects .prettierignore exists', () => {
      const flag = fs.existsSync(prettyIg);
      expect(flag).toBeTrue();
    });
  });

  describe('Git File Tests', () => {
    it('expects Git Directory exists', () => {
      const flag = fs.existsSync(gitDir);
      expect(flag).toBeTrue();
    });

    it('expects .gitignore exists', () => {
      const flag = fs.existsSync(gitIg);
      expect(flag).toBeTrue();
    });
  });

  describe('Readme File Tests', () => {
    it('expects readme.md exists', () => {
      const flag = fs.existsSync(readMe);
      expect(flag).toBeTrue();
    });
  });

  describe('TypeScript File Tests', () => {
    it('expects tsconfig.json exists', () => {
      const flag = fs.existsSync(tsConfig);
      expect(flag).toBeTrue();
    });
  });

  describe('EntryFile File Tests', () => {
    it('expects src Directory exists', () => {
      const flag = fs.existsSync(srcDir);
      expect(flag).toBeTrue();
    });

    it('expects Entry TypeSCript exists', () => {
      const flag = fs.existsSync(entryFile);
      expect(flag).toBeTrue();
    });
  });

  describe('Jasmine File Tests', () => {
    it('expects jasmine Directory exists', () => {
      const flag = fs.existsSync(jasmineDir);
      expect(flag).toBeTrue();
    });

    it('expects jasmine.json exists', () => {
      const flag = fs.existsSync(jasmine);
      expect(flag).toBeTrue();
    });

    it('expects jasmine-spec-reporter Config exists', () => {
      const flag = fs.existsSync(jasmineReporter);
      expect(flag).toBeTrue();
    });
  });

  describe('Node_Modules Tests', () => {
    it('expects node_modules Directory exists', () => {
      const flag = fs.existsSync(nodeDir);
      expect(flag).toBeTrue();
    });
  });
});
