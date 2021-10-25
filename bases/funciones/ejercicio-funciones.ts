(() => {
  //funciones basicas
  function sumar(a: number, b: number): number {
    return a + b;
  }

  let contar = (heroes: string[]): number => {
    return heroes.length;
  };

  let superHeroes: string[] = ['flash', 'arrow', 'superman', 'linterna verde'];
  contar(superHeroes);

  //parametros por defecto
  const llamarBatman = (llamar: boolean = false): void => {
    if (llamar) {
      console.log('Batiseñal activada');
    }
  };

  llamarBatman();

  //REST?
  const unirHeroes = (...personas: string[]): string => {
    return personas.join(', ');
  };

  //tipo funcion
  const noHaceNada = (
    numero: number,
    texto: string,
    booleano: boolean,
    arreglo: string[]
  ): void => {};

  //crear el tipo de funcion que acepte la funcion 'noHaceNada'
  let noHaceNadaTampoco: (
    numero: number,
    texto: string,
    booleano: boolean,
    arreglo: string[]
  ) => void;

  noHaceNadaTampoco = noHaceNada;
})();
