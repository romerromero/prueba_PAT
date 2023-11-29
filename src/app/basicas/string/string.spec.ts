
// Sirve para agrupar pruebas
// describe('Pruebas de Strings');
// it('Debe de regresar un string');

import { mensaje } from "./string";


describe('Pruebas de strings',() => {
    

    it( 'Debe de regresar un string', () =>{
        const resp = mensaje('Romer');

        expect( typeof resp ).toBe('string');
    });

});