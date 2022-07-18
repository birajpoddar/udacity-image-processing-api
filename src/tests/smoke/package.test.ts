import { promises as fs } from 'fs';
import { PackageJson } from 'type-fest';
const pack = './package.json';

describe('Package.json Tests', () => {
  let packStr: string;
  let packJson: PackageJson;

  beforeAll(async () => {
    packStr = await fs.readFile(pack, 'utf-8');
  });

  it('expects package.json contains configuration', () => {
    expect(pack).toBeTruthy();
  });

  it('expects parsing of json happens', () => {
    packJson = JSON.parse(packStr);
    expect(packJson).toBeTruthy();
  });

  describe('Scripts Tests in package.json', () => {
    let scriptsStr: string;
    let scripts: string[];

    beforeAll(() => {
      scriptsStr = JSON.stringify(packJson.scripts);
      scripts = Object.keys(JSON.parse(scriptsStr));
    });

    it('scripts exists in configuration', () => {
      expect(packJson.scripts).toBeTruthy();
    });

    it('init script exists in configuration', () => {
      expect(scripts).toContain('init');
    });

    it('lint script exists in configuration', () => {
      expect(scripts).toContain('lint');
    });

    it('prettier script exists in configuration', () => {
      expect(scripts).toContain('prettier');
    });

    it('build script exists in configuration', () => {
      expect(scripts).toContain('build');
    });

    it('jasmin script exists in configuration', () => {
      expect(scripts).toContain('jasmine');
    });

    it('clean script exists in configuration', () => {
      expect(scripts).toContain('clean');
    });

    it('test-smoke script exists in configuration', () => {
      expect(scripts).toContain('test-smoke');
    });

    it('test script exists in configuration', () => {
      expect(scripts).toContain('test');
    });

    it('start-dev script exists in configuration', () => {
      expect(scripts).toContain('start-dev');
    });

    it('start script exists in configuration', () => {
      expect(scripts).toContain('start');
    });
  });
});
