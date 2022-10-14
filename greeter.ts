import { IGreeter } from "./greetService";

export class EnglishSpeakGreeter implements IGreeter {
    SayHello = (name: string) => {
        return 'Hello ' + name;
    }
}
export class JapaneseSpeakGreeter implements IGreeter {
    SayHello = (name: string) => {
        return 'こんにちは ' + name;
    }
}