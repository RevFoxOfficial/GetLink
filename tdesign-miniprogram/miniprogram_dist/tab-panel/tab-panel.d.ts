import {RelationsOptions, SuperComponent} from '../common/src/index';

export default class TabPanel extends SuperComponent {
    externalClasses: string[];
    relations: RelationsOptions;
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdTabPanelProps;
    data: {
        prefix: string;
        classPrefix: string;
        active: boolean;
        hide: boolean;
        id: string;
    };
    observers: {
        'label, badgeProps, disabled, icon, panel, value'(): void;
    };

    setId(id: any): void;

    getComputedName(): string;

    update(): void;

    render(active: Boolean, parent: any): void;
}
