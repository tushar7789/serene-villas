'use client'

import { message } from "antd"
import { useEffect } from "react";

const NotificationComp = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const key = "1234";


    const success = (msg: string) => {
        messageApi.open({
            key: key,
            // type: 'success',
            content: msg,
            duration: 2,
        });
    };

    useEffect(() => {
        const redirectReason = localStorage.getItem("redirectReason");
        if (redirectReason !== null) {
            const msg = `${redirectReason === "signin" ? "You've signed in" : "You've signed Out"}`
            success(msg);
        }

        return () => {
            messageApi.destroy(key);
            localStorage.clear();
        }
    }, []);

    return (
        <>
            {contextHolder}
        </>
    )
}

export default NotificationComp
