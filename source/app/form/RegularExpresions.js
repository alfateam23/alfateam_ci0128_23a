export class RegularExpresions {
  constructor() {
    //this.nombre = { campo: "", valido: null };
    this.expresiones = {
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      apellido2: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // alfanuméricos, puntos, guiones bajos, signos de más y signos de punto,
      // verifica si una cadena representa una edad válida en el rango de 1 a 120 años.
      placa: /^(([A-Za-z]{2}-)?([A-Za-z]{1,3}-)?([0-9A-Za-z]{2,6}))?$/,
      telefono: /^(?:\d{1,3})?\d{8}$/,
      // verifica que solo ponga numeros de 8 digitos o el formato con codigo de pais +50689562145 por ejemplo
      identificacionUsuario: /^.{0,60}$/ // coincide con cualquier carácter (excepto saltos de línea), hasta 60 caracteres.
    };
  } // termina constructor
}

export default RegularExpresions;