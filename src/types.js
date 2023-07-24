/**
 * A bounding box (2D oder 3D).
 * 
 * @typedef {Array.<number>} BoundingBox
 */

/**
 * A point (2D or 3D).
 * 
 * @typedef {Array.<number>} Point
 */

/**
 * A band with the corresponding index.
 * 
 * @typedef {Object} BandWithIndex
 * @property {number} index The index in the bands array.
 * @property {Object} band The band object
 */

/**
 * A data provider.
 * 
 * @typedef {Object} Provider
 * @property {string} name The name of the organization or the individual.
 * @property {?string} description Description
 * @property {?Array.<string>} roles Roles of the provider. Any of licensor, producer, processor or host.
 * @property {?string} url Homepage
 */
