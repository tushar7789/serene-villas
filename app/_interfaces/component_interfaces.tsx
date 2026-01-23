import { Url } from "next/dist/shared/lib/router/router";
import { Dispatch, SetStateAction } from "react";

export interface ButtonPropInterface {
    children: React.ReactNode;
    to?: Url,
    type: string,
    callbackSetter?: Dispatch<SetStateAction<boolean>>,
    key?: React.Key,
    height?: string,
    weight?: string
}

export interface OverlayPropsInterface {
    type?: string,
    callbackSetter?: Dispatch<SetStateAction<boolean>>;
}

export interface DatePickerInterface {
    type: string,
    datePickerType?: string
}

export interface RootProviderInterface {
    child: React.ReactNode
}