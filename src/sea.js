
/**
 * @fileoverview A CommonJS module loader, focused on web.
 * @author lifesinger@gmail.com (Frank Wang)
 */


/**
 * Base namespace for the framework.
 *
 * @const
 */
var seajs = seajs || {};


/**
 * The version of the framework. It will be replaced with "major.minor.patch"
 * when building.
 *
 * @const
 */
seajs.version = '@VERSION@';


// Module status：
//  1. downloaded - The script file has been downloaded to the browser.
//  2. define()d - The define() has been executed.
//  3. memoize()d - The module info has been added to memoizedMods.
//  4. require()d -  The module.exports is available.


/**
 * The private data. Internal use only.
 */
seajs._data = {

  /**
   * The configuration data.
   */
  config: {},

  /**
   * Modules that are being downloaded.
   * { uri: scriptNode, ... }
   */
  fetchingMods: {},

  /**
   * The module that are define()d, but has not been memoize()d.
   */
  pendingMod: null,

  /**
   * Modules that have been memoize()d.
   * { uri: { dependencies: [], factory: fn, exports: {} }, ... }
   */
  memoizedMods: {}

};


/**
 * The private utils. Internal use only.
 */
seajs._util = {};


/**
 * The inner namespace for methods. Internal use only.
 */
seajs._fn = {};