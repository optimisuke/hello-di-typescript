export interface IGreeter {
    SayHello: (name: string) => string;
}

export class GreetService {
    greeter: IGreeter;
    constructor(
        greeter: IGreeter
    ) {
        this.greeter = greeter;
    }
    SayHello = (name: string) => {
        return this.greeter.SayHello(name);
    }
}