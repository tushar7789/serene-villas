export interface OverlayPropsInterface {
    type?: string,
    callbackSetter?: () => void,
}

export interface DatePickerInterface {
    type: string,
    datePickerType?: string
}

export interface RootProviderInterface {
    child: React.ReactNode
}