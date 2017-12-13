
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
    DEFAULT_OPTION_ITEM_TEXT: ''

};