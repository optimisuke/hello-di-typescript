import { GreetService, IGreeter } from "./greetService";

describe('GreetServiceのテスト', () => {
    const mockSayHello = jest.fn(() => {
        return 'fuga'
    })
    const MockGreeter = jest.fn<IGreeter, []>().mockImplementation(() => {
        return {
            SayHello: mockSayHello
        }
    })
    it('SayHello 正常系', async () => {
        const mg = new MockGreeter();
        const gs = new GreetService(mg);

        const received = gs.SayHello('hoge');
        console.log(received);
        const expected = 'fuga';
        expect(received).toEqual(expected);
        expect(mockSayHello).toHaveBeenCalledWith('hoge');
    });
});
