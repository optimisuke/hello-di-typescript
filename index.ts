import { EnglishSpeakGreeter, JapaneseSpeakGreeter } from "./greeter";
import { GreetService } from "./greetService";

const greeter1 = new JapaneseSpeakGreeter();
const greetService1 = new GreetService(greeter1);
console.log(greetService1.SayHello('世界'));

const greeter2 = new EnglishSpeakGreeter();
const greetService2 = new GreetService(greeter2);
console.log(greetService2.SayHello('World'));
