function html(template) {
  if (Array.isArray(template)) {
    const [head, ...tail] = template

    if (typeof tail[0] === 'object' && !Array.isArray(tail[0])) {
      return tag(head, tail[0], tail.slice(1))
    } else {
      return tag(head, {}, tail)
    }
  } else if (typeof template === 'string') {
    return template
  } else {
    throw new TypeError('Invalid template')
  }
}

const tag = (name, attributes, innerTemplate) =>
  `<${name}` +
    (Object.keys(attributes).length !== 0
      ? ' ' + Object.keys(attributes)
        .map(attr => `${attr}="${attributes[attr]}"`)
        .join(' ')
      : '')
    + '>' +
    innerTemplate.map(element => html(element)).join('') +
  `</${name}>`

export default html
