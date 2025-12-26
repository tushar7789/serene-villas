import { Url } from "next/dist/shared/lib/router/router";
import { Dispatch, SetStateAction } from "react";

export interface ButtonPropInterface {
    children: React.ReactNode;
    to: Url,
    type: string,
    callbackSetter?: Dispatch<SetStateAction<boolean>>;
}

export interface OverlayPropsInterface {
    type: string,
    callbackSetter?: Dispatch<SetStateAction<boolean>>;
}

export interface DatePickerInterface {
    type: string,
    datePickerType?: string
}