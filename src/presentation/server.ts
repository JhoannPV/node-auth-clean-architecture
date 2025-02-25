import express, { Router } from 'express';

interface Options {
    port?: number;
    routes: Router;
}

export class Server {
    public readonly app = express(); // readonly: es para definir una propiedad que solo se puede asignar una vez
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: Options) {
        // el = 3100 es para que si no se pasa el puerto, por defecto sea 3100
        const { port = 3100, routes } = options;

        this.port = port;
        this.routes = routes;
    }

    async start() {
        // Middlewares: funciones que se ejecutan antes que otras funciones
        this.app.use(express.json()); // Para que el servidor entienda JSON
        this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded, Para que el servidor entienda formularios

        // Usar las rutas definidas
        this.app.use(this.routes);

        // Escuchar el puerto
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }
}