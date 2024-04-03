export function generateSlug(texto: string): string {
    return texto
      .normalize('NFD') // Separa os acentos dos caracteres
      .replace(/[\u0300-\u036f]/g, '') // Remove os acentos
      .toLowerCase()
      .replace(/[^\w\s-]/g,'')
      .replace(/\s+/g,'-')
  }
  