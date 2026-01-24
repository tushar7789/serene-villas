// import { Url } from "next/dist/shared/lib/router/router";
import { Dispatch, SetStateAction } from "react";
// import { VillaInterface } from "../_components/villaSpecsComp";
import { VillaType } from "../_store/villaDataStore";


export interface ButtonPropInterface {
    children: React.ReactNode;
    to?: string,
    type: string,
    callbackSetter?: Dispatch<SetStateAction<boolean>>,
    key?: React.Key,
    height?: string,
    width?: string,
    villaDetails?: VillaType
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