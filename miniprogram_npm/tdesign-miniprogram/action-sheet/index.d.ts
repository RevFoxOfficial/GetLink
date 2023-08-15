/// <reference types="miniprogram-api-typings" />
import {ActionSheetItem, ActionSheetShowOption, ActionSheetTheme} from './show';

export {ActionSheetItem, ActionSheetTheme, ActionSheetShowOption};
declare const _default: {
    show(options: ActionSheetShowOption): WechatMiniprogram.Component.TrivialInstance;
    close(options: ActionSheetShowOption): void;
};
export default _default;
