/* Collection of definition of data types and structures 
 *
 *
 */

class Item {

    constructor( name='', text='', value='', isSelected=false ) {

        this.name = name;
        this.text = text;
        this.value = value;
        this.isSelected = isSelected;
    }
}

module.exports = {

    Item,

    OPTIONS_TYPE_SINGLE: 'single',
    OPTIONS_TYPE_MULTIPLE: 'multiple',
    DEFAULT_OPTION_ITEM_TEXT: '',

    rules: {

        NONE: '',
        REQUIRED: 'required',
        ALPHA_SPACE: 'alpha-space',
        NUMERIC: 'numeric',
        ALPHANUMERIC_UNDERSCORE_HYPHEN: 'alphanumeric-underscore-hyphen',
        POSITIVE_INTEGER: 'positive-integer',
        TIME: 'time',
        ENGLISH_NAME: 'english-name',
        DIGIT: 'digit',
    }
};