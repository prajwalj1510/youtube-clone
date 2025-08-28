// 'use client';

import { HydrateClient, trpc } from "@/trpc/server"
import { ClientTRPC } from "./client"
import { Suspense } from "react"
import { ErrorBoundary } from 'react-error-boundary'

// import { trpc } from "@/trpc/server"

// Both ways :=> TRPC Client & Server rendering

// import { trpc } from "@/trpc/client"

const HomePage = async () => {

  // const { data } = trpc.hello.useQuery({ text: 'Prajwal TRPC Client' }) // => slower 
  // const data = await trpc.hello({ text: 'Prajwal TRPC Server' }) // => much slower

  void trpc.hello.prefetch({ text: 'Prajwal inside server page.tsx' }) // => faster way to render

  return (
    <HydrateClient>
      {/* Client component says: {data.greeting} */}

      <Suspense fallback={<p>Loading...</p>}>
        <ErrorBoundary fallback={<p>Error...</p>}>
          <ClientTRPC />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  )
}

export default HomePage