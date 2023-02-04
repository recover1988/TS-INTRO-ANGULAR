export interface Producto {
    desc: string;
    precio: number;
};

const telefono: Producto = {
    desc: 'Nokia',
    precio: 120,
}

const tablet: Producto = {
    desc: "iPad",
    precio: 233,
}

export function calcularISV(productos: Producto[]): [number, number] {
    let total = 0;
    productos.forEach(({ precio }: Producto, i, arr) => {
        total += precio
    })
    return [total, total * 0.15]
}

// const articulos = [telefono, tablet]

// const [total, inv] = calcularISV(articulos)