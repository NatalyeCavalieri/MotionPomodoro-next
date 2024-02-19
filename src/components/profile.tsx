import Image from 'next/image'

export function Profile(){
  return (
    <div className="flex items-center">
      <Image
        src="https://github.com/natalyecavalieri.png"
        alt="Luane Cavalieri"
        width={88}
        height={88}
      />
      <div className='ml-6'>
        <strong className='text-2xl font-semibold text-gray-700'>Luane Cavalieri</strong>
        <p className='text-base flex gap-2 text-gray-600'>
          <Image src="icons/Up.svg" alt="Level" width={14} height={16} />
          Level 1</p>
      </div>
    </div>
  )
}