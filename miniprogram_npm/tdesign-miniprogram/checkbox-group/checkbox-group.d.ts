import {RelationsOptions, SuperComponent} from '../common/src/index';

export default class CheckBoxGroup extends SuperComponent {
    externalClasses: string[];
    relations: RelationsOptions;
    data: {
        prefix: string;
        classPrefix: string;
        checkboxOptions: any[];
    };
    properties: import("./type").TdCheckboxGroupProps<import("./type").CheckboxGroupValue>;
    observers: {
        value(): void;
        options(): void;
    };
    lifetimes: {
        ready(): void;
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    $checkAll: any;
    methods: {
        getChildren(): any;
        updateChildren(): void;
        updateValue({value, checked, checkAll, indeterminate}: {
            value: any;
            checked: any;
            checkAll: any;
            indeterminate: any;
        }): void;
        initWithOptions(): void;
        handleInnerChildChange(e: any): void;
        setCheckall(): void;
    };
}
