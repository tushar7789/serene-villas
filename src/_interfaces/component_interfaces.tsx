import { Url } from "next/dist/shared/lib/router/router";

export interface ButtonPropInterface {
    children: React.ReactNode;
    to: Url,
    type: string
}