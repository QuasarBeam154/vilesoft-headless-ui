import { useState } from "react"
import { Modal } from "../modal"
import { ModalRootProps } from "../modal/ModalRoot"

interface AppModalProps extends ModalRootProps {
  callback: () => void
}

export const AppModal = ({callback, ...rest}: AppModalProps) => {
  return (
    <Modal.Root {...rest}>
      <Modal.Content>
        <div className='flex flex-col gap-7'>
          <div className="flex gap-6 items-center">
            <div className={`aspect-square w-[12%] p-1 rounded-lg`}> A </div>
            <div className='flex flex-col gap-1'>
              <h1 className='text-2xl font-bold leading-tight text-slate-700'>Route Flat</h1>
              <h1 className='text-xl font-semibold leading-tight text-slate-500'>Manage, track and view your fleets.</h1>
            </div>
          </div>
          <div className='flex flex-col gap-1 bg-slate-200 p-2 rounded-lg'>
            <h1 className='text-lg font-bold leading-tight text-slate-600'>About</h1>
            <h1 className='text-xs font-medium text-slate-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam velit ad numquam animi maiores, obcaecati dignissimos fugiat facilis nesciunt eum quod a, temporibus autem quis tempora ab, at vel voluptatem.</h1>
          </div>
          <div className='h-fit flex justify-center'>
            <button className="px-5 py-3 bg-red-300 text-red-700 rounded-lg font-semibold" onClick={() => callback()}>Cancel</button>
          </div>
        </div>
      </Modal.Content>
    </Modal.Root>
  )
}