'use client';

import { ResponsiveModal } from "@/components/responsive-dialog";
import { Button } from "@/components/ui/button"
import { trpc } from "@/trpc/client";
import { Loader, PlusIcon } from "lucide-react"
import { toast } from "sonner";
import { StudioUploader } from "./studio-uploader";

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
        <>
            <ResponsiveModal
                open={!!create.data?.url}
                title="Upload"
                onOpenChange={() => { create.reset() }}
            >
                Upload here
                {create.data?.url ? <StudioUploader endpoint={create.data?.url} onSuccess={() => { }} /> : <Loader className="size-4 animate-spin" />}
            </ResponsiveModal>
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
        </>
    )
}