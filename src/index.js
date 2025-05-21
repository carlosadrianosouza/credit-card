function descobrirPrefixo(numeroCartao) {
    if (numeroCartao.startsWith("4026") || numeroCartao.startsWith("4508") ||
        numeroCartao.startsWith("4844") || numeroCartao.startsWith("4913")) {
        return "VISA ELECTRON";
    } else if (numeroCartao.startsWith("4")) {
        return "VISA";
    } else if (numeroCartao.startsWith("51") || numeroCartao.startsWith("52") ||
               numeroCartao.startsWith("53") || numeroCartao.startsWith("54") ||
               numeroCartao.startsWith("55")) {
        return "MASTERCARD";
    } else if (numeroCartao.startsWith("36") || numeroCartao.startsWith("38")) {
        return "DINNERS CLUB";
    } else if (numeroCartao.startsWith("6011") || numeroCartao.startsWith("65")) {
        return "DISCOVER";
    } else if (numeroCartao.startsWith("35")) {
        return "JCB";
    } else if (numeroCartao.startsWith("34") || numeroCartao.startsWith("37")) {
        return "AMERICAN EXPRESS";
    } else {
        return "Prefixo desconhecido";
    }
}

const numero = "5465711393972079";
console.log("Número do cartão: " + numero + " | Tipo: " + descobrirPrefixo(numero));