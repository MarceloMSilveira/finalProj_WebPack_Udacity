import { upDateUI } from "../src/client";

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
  
  // Exemplo de teste
  test('atualiza o DOM corretamente', async () => {
    // Preparação do DOM simulado
    document.body.innerHTML = `
      <div id="results"></div>
      <div id="subjectivity"></div>
    `;
  
    // Chama a função que será testada
    await upDateUI();
  
    // Verifica se os elementos do DOM foram atualizados corretamente
    expect(document.getElementById('results').innerHTML).toBe(
      'Text extract:: I LOVE YOU'
    );
    expect(document.getElementById('subjectivity').innerHTML).toBe(
      'Subjectivity: OBJECTIVE'
    );
  });