(() => {
  const error = (mensaje: string): never => {
    throw new Error(mensaje);
  };

  error('Auxilio');

  console.log('hola mundo');
})();
