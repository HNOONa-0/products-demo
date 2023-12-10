
export class Registry {
    constructor() {
      this.registryMap = new Map();
    }
  
    insert(key, value) {
      this.registryMap.set(key, value);
    }
  
    get(key) {
      return this.registryMap.get(key) || null;
    }
}