import { NotificationType } from "./notification.type";

export interface Notification {
    id: string,
    type: NotificationType,
    header: string,
    message: string,
    autoClose: boolean,
    timeout?: number,
    response?: any,
    // action?: { text: string, onClick?: Function },
    onAdd?: Function,
    onRemove?: Function,
    timeoutObj?: any
}