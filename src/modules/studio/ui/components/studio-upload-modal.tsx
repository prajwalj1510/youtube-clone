'use client';

import { Button } from "@/components/ui/button"
import { trpc } from "@/trpc/client";
import { Loader, PlusIcon } from "lucide-react"
import { toast } from "sonner";

export const StudioUploadModal = () => {

    const utils = trpc.useUtils()
    const create = trpc.videos.create.useMutation({
        onSuccess: () => {
            toast.success('Video created...')
            utils.studio.getMany.invalidate() // fetch updated data after creating 
        },
        onError: () => {
            toast.error('Ooops! Something went wrong. Please try again.')
        }
    })

    return (
        <Button disabled={create.isPending} onClick={() => create.mutate()} variant='secondary' className="rounded-full p-2">
            {create.isPending ? (
                <>
                    <Loader className="size-4 animate-spin" />
                    Creating... 
                </>
            ) : (
                <>
                    <PlusIcon />
                    Create
                </>
            )}
        </Button >
    )
}