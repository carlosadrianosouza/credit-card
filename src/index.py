def descobrir_prefixo(numero_cartao: str) -> str:
    """
    Retorna o emissor do cartão com base no prefixo do número informado.
    """
    if numero_cartao.startswith('4'):
        return "Visa"
    elif any(numero_cartao.startswith(str(i)) for i in range(51, 56)):
        return "Mastercard"
    elif numero_cartao.startswith('36') or numero_cartao.startswith('38'):
        return "Dinners Club"
    elif numero_cartao.startswith('6011') or numero_cartao.startswith('65'):
        return "Discover"
    elif numero_cartao.startswith('35'):
        return "JCB"
    elif numero_cartao.startswith('34') or numero_cartao.startswith('37'):
        return "American Express"
    else:
        return "Prefixo desconhecido"

# Exemplo de uso:
numero = "4332216173359"
print(descobrir_prefixo(numero))  # Saída esperada: Visa