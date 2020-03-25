import { ReactNode } from "react";

export default interface navBarProps {
    title: string;
    subTitle? : string;
    content1? : ReactNode;
    content2?:  ReactNode;
    content3? : ReactNode;
    userInfo? :ReactNode;
    editProfile?:ReactNode;
    accountTitle? :ReactNode;
}