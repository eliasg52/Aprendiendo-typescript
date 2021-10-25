(() => {
  const sumarNumeros = (a: number, b: number) => a + b;
  const saludar = (nombre: string) => `Hola ${nombre}`;
  const salvarMundo = () => `El mundo esta salvado`;

  let miFuncion: (y: number, z: number) => number;

  miFuncion = sumarNumeros;
  console.log(miFuncion(3, 4));
})();
