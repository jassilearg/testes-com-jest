//import { describe } from "node:test";
import { describe, it, expect } from '@jest/globals';

import isValid from "./identifier";

describe('Função isValid', () => {
    it('Deve retornar "Inválido" para string vazia', () => {
        expect(isValid('')).toBe('Inválido');
    });

    it('Deve retornar "Inválida" para string maior que 6', () => {
        expect(isValid('1234567')).toBe("Inválido");
    });

    it('Deve retornar "Inválida" para string que não começa com letra', () => {
        expect(isValid('123abc')).toBe('Inválido');
    });

    it('Deve retornar "Inválida" para string com caracteres não alfanuméricos', () => {
        expect(isValid('abc$def')).toBe('Inválido');
    });

    it('Deve retornar "Válido" para string válida', () => {
        expect(isValid('a1bcde')).toBe('Válido');
    });
});