function descobrirPrefixo(numeroCartao) {
    if (numeroCartao.startsWith('4')) {
        return "Visa";
    } else if (/^5[1-5]/.test(numeroCartao)) {
        return "Mastercard";
    } else if (numeroCartao.startsWith('36') || numeroCartao.startsWith('38')) {
        return "Dinners Club";
    } else if (numeroCartao.startsWith('6011') || numeroCartao.startsWith('65')) {
        return "Discover";
    } else if (numeroCartao.startsWith('35')) {
        return "JCB";
    } else if (numeroCartao.startsWith('34') || numeroCartao.startsWith('37')) {
        return "American Express";
    } else {
        return "Prefixo desconhecido";
    }
}

// Exemplo de uso:
const numero = "4332216173359";
console.log(descobrirPrefixo(numero)); // Saída esperada: Visa