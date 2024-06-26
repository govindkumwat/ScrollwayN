import React from 'react'
import { useParams } from 'next/navigation'





const SearchHeader = ({detail}) => {

  console.log('deta', detail)


  return (
    <div className='headerdetail'>
    <div className='headerImage'>
    <img  src={ detail?.banner_background_image?.length == 0 ? 'https://styles.redditmedia.com/t5_2qh45/styles/bannerBackgroundImage_uy5it2p3oht01.png' : detail?.banner_background_image?.split('?')[0]?.replace('amp;','')} alt=""/>
    </div>
    <div className='headerText'>
    {detail.display_name}
    <div className='headericons'>
    </div>
    </div>

    </div>
  )
}

export default SearchHeader
