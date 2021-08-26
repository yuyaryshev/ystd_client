import { extendObservable, isObservableProp } from "mobx";
export function observableProps(object: any, propNames: string[]) {
    let param = {} as any;
    for (let propName of propNames) if (!isObservableProp(object, propName)) param[propName] = object[propName] || undefined;
    extendObservable(object, param);
}
