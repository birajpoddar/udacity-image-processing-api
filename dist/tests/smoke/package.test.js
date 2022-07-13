"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const pack = './package.json';
describe('Package.json Tests', () => {
    let packStr;
    let packJson;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        packStr = yield fs_1.promises.readFile(pack, 'utf-8');
    }));
    it('expects package.json contains configuration', () => {
        expect(pack).toBeTruthy();
    });
    it('expects parsing of json happens', () => {
        packJson = JSON.parse(packStr);
        expect(packJson).toBeTruthy();
    });
    describe('Scripts Tests in package.json', () => {
        let scriptsStr;
        let scripts;
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
