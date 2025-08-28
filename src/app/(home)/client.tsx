'use client';

import { trpc } from "@/trpc/client";

export const ClientTRPC = () => {

    const [data] = trpc.hello.useSuspenseQuery({
        text: 'Prajwal inside client.tsx'
    })

    return (
        <div>
            Client TRPC says: {data.greeting}
        </div>
    )
}