

import Image from 'next/image'

export const RevenueHeader = () => {
  return (
    <header className=" bg-green-800 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="w-1/3">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={64}
            height={64}
            className="h-16 w-auto"
          />
        </div>
        <div className="w-1/3 text-center">
          <h1 className="text-2xl font-bold">MSNS</h1>
        </div>
        
        <div className="w-1/3"></div>
      </div>
    </header>
  )
}
