const slugify = (text) => {
  if (!text || typeof text !== 'string') {
    throw new Error('Parameter "text" must be a string');
  }

  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

module.exports = slugify;
