/* Configurations, eg. classNamePrefix
 *
 */

const DEFAULT_CONTROL_CLASS_NAME = 'control';

class Configuraion {

    constructor() {

        this._classNamePrefix = DEFAULT_CONTROL_CLASS_NAME;
    }

    set classNamePrefix( prefix ) {

        this._classNamePrefix = prefix;

    }

    get classNamePrefix() {

        return this._classNamePrefix;
    }
}

const conf = new Configuraion();

export default conf;