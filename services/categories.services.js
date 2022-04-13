const faker = require('faker');

class CategoriesService {

  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productAdjective()
      });
    }
  }

  create() {
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find(item => item.id === id);
  }

  update(id, changes) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Categoria no encontrada')
    }
    const categories = this.categories[index];
    this.categories[index] = {
      ...categories,
      ...changes
    };
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Categoria no encontrada')
    }
    this.categories.splice(index, 1);
    return { id }
  }
}

module.exports = CategoriesService;
