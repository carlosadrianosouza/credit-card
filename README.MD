
# Função `descobrirPrefixo`

Esta função tem como objetivo identificar a bandeira (emissor) de um cartão de crédito a partir do número informado, utilizando os prefixos conhecidos de cada emissor.

## Parâmetros

- **numeroCartao** (`string`): Número do cartão de crédito a ser analisado. Pode ser informado com ou sem espaços, mas o ideal é que seja apenas números.

## Funcionamento

A função verifica, em ordem de prioridade, se o número do cartão começa com determinados prefixos associados a cada bandeira. O retorno é uma string com o nome da bandeira correspondente ou `"Prefixo desconhecido"` caso não seja identificado.

### Prefixos utilizados

- **VISA ELECTRON**: 4026, 4508, 4844, 4913
- **VISA**: 4
- **MASTERCARD**: 51, 52, 53, 54, 55
- **DINNERS CLUB**: 36, 38
- **DISCOVER**: 6011, 65
- **JCB**: 35
- **AMERICAN EXPRESS**: 34, 37

A verificação é feita usando o método `startsWith` para cada prefixo.

## Exemplo de uso


```javascript
const numero = "5465711393972079";
console.log("Número do cartão: " + numero + " | Tipo: " + descobrirPrefixo(numero));
// Saída: Número do cartão: 5465711393972079 | Tipo: MASTERCARD
```

## By:Github Copilot
