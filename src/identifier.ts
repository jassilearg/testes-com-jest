export default function isValid(identifier: string): string {
  if (identifier.length < 1 || identifier.length > 6) {
    return ("Inválido");
  } else if (!/^[a-zA-Z]+$/.test(identifier.charAt(0))) {
    return ("Inválido");
  } else if (!/^[0-9a-zA-Z]+$/.test(identifier)) {
    return ("Inválido");
  } else {
    return ("Válido");
  }
}