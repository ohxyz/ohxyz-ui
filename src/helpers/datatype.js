/* Collection of definition of data types and structures 
 *
 *
 */


/* Option for OptionList, DropDownList, OptionCheckBoxList, etc
 * 
 * @ref https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
 *
 */

class Option {

    constructor( obj ) {

        this.selected = false;
        this.disabled = false;

        let type = typeof obj;

        if ( type === 'undefined' ) {

            this.label = '';
            this.value = '';
        }
        else if ( type === 'string' 
                    || type === 'number' 
                    || type === 'boolean' ) {

            this.label = obj.toString();
            this.value = obj.toString();
        }
        else if ( type === 'object' ) {

            this.label = ( obj.label === undefined ) ? '' : obj.label;
            this.value = ( obj.value === undefined ) ? this.label : obj.value;

            // Purposefully use ==
            if ( obj.selected == true || obj.selected === 'selected' ) {

                this.selected = true;
            }

            if ( obj.disabled == true || obj.disabled === 'disabled' ) {

                this.disabled = true;
            }
        }
        else {

            throw new Error( '[WFC] Invalid type of arguments in constructor.' );
        }
    }

    toString() {

        return this.label;
    }
}

module.exports = {

    Option
};