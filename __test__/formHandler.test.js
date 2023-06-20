import { handleSubmit } from "../src/client";
import { TextEncoder } from 'fast-text-encoding';
import { JSDOM } from 'jsdom';

global.TextEncoder = TextEncoder;

// Mock do objeto de evento

test('Testing the handleSubmit function', () => {
    // Defina a entrada para a função
    const event = {
      preventDefault: jest.fn(),
    };

    const Client = {
      postData: jest.fn(),
      upDateUI: jest.fn()
    }
    
    const formText = 'I LOVE YOU';

    /*const dom = new JSDOM('<!doctype html><html><body><input type="hidden" id="name" value="test"></body></html>');
    const document = dom.window.document;    */

    document.body.innerHTML =
    '<input type="hidden" id="name" value="I LOVE YOU">' ;
  
    // Chame a função que você deseja testar
    handleSubmit(event);
  
    // Verifique se a função produz a saída esperada
    expect(event.preventDefault).toHaveBeenCalled();
    expect(Client.postData).toHaveBeenCalledWith('http://localhost:8051/dataPost', { userResp: formText });
    expect(Client.upDateUI).toHaveBeenCalled();
  });