import { Dialog, Transition } from "@headlessui/react"
import { Fragment, ReactNode } from "react"

interface ModalContentProps {
  children: ReactNode
}

const ModalContent = ({ children }: ModalContentProps) => {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="p-6 rounded-2xl shadow-2xl max-w-[600px] min-w-[90%] min-h-[20%] z-30 absolute top-1/2 left-[calc(50%_-_56px)] translate-x-[-50%] translate-y-[-50%]
                    md:p-6 md:min-w-[30%] md:min-h-[20%] bg-slate-100">
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  )
}

export default ModalContent