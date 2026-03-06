// Corrige la troncature des champs markdown et text dans les items n8n
// - Évite la mutation directe des items originaux
// - Utilise l'optional chaining pour éviter les erreurs si item.json est undefined
// - Retourne de nouveaux objets au lieu de modifier ceux existants

return items.map(item => ({
  ...item,
  json: {
    ...item.json,
    markdown: (item.json?.markdown || '').substring(0, 45000),
    text: (item.json?.text || '').substring(0, 10000),
  },
}));
