// 'use client';

import { HomeView } from "@/modules/home/ui/views/HomeView"
import { HydrateClient, trpc } from "@/trpc/server"
import { Suspense } from "react"
import { ErrorBoundary } from 'react-error-boundary'

// import { trpc } from "@/trpc/server"

// Both ways :=> TRPC Client & Server rendering

// import { trpc } from "@/trpc/client"
export const dynamic = 'force-dynamic'

interface HomePageProps {
  searchParams: Promise<{
    categoryId?: string;
  }>
}

const HomePage = async ({ searchParams }: HomePageProps) => {

  const { categoryId } = await searchParams

  // const { data } = trpc.hello.useQuery({ text: 'Prajwal TRPC Client' }) // => slower 
  // const data = await trpc.hello({ text: 'Prajwal TRPC Server' }) // => much slower

  // void trpc.hello.prefetch({ text: 'Prajwal inside server page.tsx' }) // => faster way to render

  void trpc.categories.getMany.prefetch()

  return (
    <HydrateClient>
      <HomeView categoryId = {categoryId}/>
    </HydrateClient>
  )
}

export default HomePage