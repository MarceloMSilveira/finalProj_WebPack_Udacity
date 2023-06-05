
import { postData } from "../src/client";

// Mock para simular a resposta da solicitação
const mockResponse = {
    agreement: 'AGREEMENT',
    sentence_list: [{ text: 'I LOVE YOU' }],
    subjectivity: 'OBJECTIVE',
};
  
  // Mock da função fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    })
  );

// Descreva o nome do teste e passe uma função de callback
test('Teste postData()', async () => {
    // Defina as variáveis de entrada para o teste
    const url = 'http://localhost:8051/dataPost';
    const data = {userResp: 'I LOVE YOU'};
  
    // Chame a função que você deseja testar
    const result = await postData(url, data);
  
    // Verifique se o resultado está correto
    expect(result.subjectivity).toEqual('OBJECTIVE');
  });
