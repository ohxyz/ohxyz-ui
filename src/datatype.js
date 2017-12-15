
class Item {

    constructor( name='', text='', value='', isSelected=false ) {

        this.name = name;
        this.text = text;
        this.value = value;
        this.isSelected = isSelected;
    }
}

export {

    Item,
};

export default {

    OPTIONS_TYPE_SINGLE: 'single',
    OPTIONS_TYPE_MULTIPLE: 'multiple',
    DEFAULT_OPTION_ITEM_TEXT: '',

    RULE_NONE: '',
    RULE_REQUIRED: 'required',
    RULE_ALPHA_SPACE: 'alpha-space',
    RULE_NUMERIC: 'numeric',
    RULE_ALPHANUMERIC_UNDERSCORE_HYPHEN: 'alphanumeric-underscore-hyphen',
    RULE_POSITIVE_INTEGER: 'positive-integer',
    RULE_TIME: 'time',
    RULE_ENGLISH_NAME: 'english-name',
    RULE_DIGIT: 'digit'

};