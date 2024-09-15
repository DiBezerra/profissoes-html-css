function Pedir() {
    const Categoria = document.getElementById('Categoria').value;
    const grade1 = document.getElementById('grade1').value;
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = document.getElementById('grade3').value;
    const grade4 = document.getElementById('grade4').value;

    if (isNaN(grade2) || !Categoria || !grade1 || !grade3 || !grade4) {
        document.getElementById('result').innerText = 'Por favor, insira todos os dados corretamente.';
        return;
    }

    // Exemplo de lógica, ajuste conforme necessário
    const resultMessage = `Categoria: ${Categoria}\nProduto: ${grade1}\nQuantidade: ${grade2}\nData: ${grade3}\nHorário: ${grade4}\nStatus: Realizado!`;
    document.getElementById('result').innerText = resultMessage;
}
