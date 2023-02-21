import STAC from './stac';

/**
 * Class for common parts of Catalogs and Collections.
 * 
 * Don't instantiate this class!
 * 
 * @class
 * @abstract
 * @param {Object} data The STAC Catalog or Collection object
 * @param {?string} absoluteUrl Absolute URL of the STAC Catalog or Collection
 */
class CatalogLike extends STAC {

  constructor(data, absoluteUrl = null) {
    super(data, absoluteUrl);
  }

  getMetadata(field) {
    return this[field];
  }

  getSearchLink(method = null) {
    let links = this.getStacLinksWithRel('search');
    if (!method) {
      return links.find(link => link.method === method || (!method && !link.method)) || null;
    }
    else {
      return links[0] || null;
    }
  }

  getApiCollectionsLink() {
    return this.getStacLinkWithRel('data');
  }

  getApiItemsLink() {
    return this.getStacLinkWithRel('items');
  }

  getChildLinks() {
    return this.getStacLinksWithRel('child');
  }

  getItemLinks() {
    return this.getStacLinksWithRel('item');
  }

}

export default CatalogLike;
