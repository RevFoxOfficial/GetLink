import {ActionSheetTheme, close, show} from './show';

export {ActionSheetTheme};
export default {
    show(options) {
        return show(options);
    },
    close(options) {
        return close(options);
    },
};
