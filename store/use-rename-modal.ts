import {create} from "zustand"

const defaultValues = {id: "", title: ""}

interface IRenameModal {
    isOpen: boolean;
    initialValues: typeof defaultValues;
    onOpen: (id: string, title: string) => void;
    onClose: () => void
}
//when use zustand to create use modal hook we will also create modal provider to allow it to be used in different places without hydration error in nextjs
export const useRenameModal = create<IRenameModal>((set) => ({
    isOpen: false,
    onOpen: (id,title) => set({
        isOpen: true,
        initialValues: {id, title}
    }),
    onClose: () => set({
        isOpen: false,
        initialValues: defaultValues
    }),
    initialValues: defaultValues
}))