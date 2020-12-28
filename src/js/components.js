export const saludar = (name) => {
    console.log('creando etiqueta');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${name}`;

    document.body.append(h1);
};

