import React from "react";

const FormElementFileUpload = () => {
  return (
    <section className='py-12 dark:bg-dark'>
      <div className='container'>
        <div className='-mx-4 flex flex-wrap'>
          <DefaultColumn>
            <DefaultFileInput />
          </DefaultColumn>

          <DefaultColumn>
            <UploadFileInput />
          </DefaultColumn>

          <DefaultColumn>
            <AttachmentsFileInput />
          </DefaultColumn>
        </div>
      </div>
    </section>
  )
};

export default FormElementFileUpload;

const DefaultColumn = ({ children }) => {
  return (
    <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
      <div className='mb-12'>{children}</div>
    </div>
  )
}

const DefaultFileInput = () => {
  return (
    <>
      <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
        Default file input
      </label>
      <input
        type='file'
        className='w-full cursor-pointer rounded-md border border-stroke dark:border-dark-3 text-dark-6 outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke dark:file:border-dark-3 file:bg-gray-2 dark:file:bg-dark-2 file:py-3 file:px-5 file:text-body-color dark:file:text-dark-6 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'
      />
    </>
  )
}