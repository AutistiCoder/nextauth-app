"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type Props = {children: ReactNode}
export default function SessionProviderWrapper(props: Props)
{
    return <SessionProvider>{props.children}</SessionProvider>
}