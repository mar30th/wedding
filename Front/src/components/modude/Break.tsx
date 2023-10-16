import React from 'react'

const Break = () => {

  const baseUrl = process.env.REACT_APP_BASE_URL;

  return (
    <div className='clear-both opacity-50'>
        <div className='relative align-top'>
            {/* <section className="flex bg-[url('http://localhost:8080/public/banner_img/DSC_7916.webp')] min-h-[500px] static bg-fixed bg-cover bg-top bg-no-repeat"></section> */}
            <section className={`bg-[url('${baseUrl + "/public/banner_img/DSC_7916.webp'"})] min-h-[500px] static bg-fixed bg-cover bg-no-repeat opacity-50`}></section>
        </div>
    </div>
  )
}

export default Break