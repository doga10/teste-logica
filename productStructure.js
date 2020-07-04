const products = [
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]

module.exports = () => {
  return products.reduce((all, current) => {
    const [ color, size ] = current.split('-')

    if (all[color]) {
      const s = all[color][size]
      all[color][size] = s ? s + 1 : 1
    } else {
      all[color] = { [size]: 1 }
    }
    
    return all
  }, {})
}