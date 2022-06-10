import React from 'react'

import { useRequest } from 'ahooks'
import { getBanner } from '@/api/find'

import './index.scss'
import { Swiper, Image, Tag } from 'antd-mobile'

export default function Find() {
  const { data: banners } = useRequest(getBanner)

  const items = banners?.map((banner: any) => (
    <Swiper.Item key={banner.bannerId}>
      <div>
        <Tag className="tag" color={banner.titleColor === 'blue' ? '#126bae' : '#ec9bad'}>
          {banner.typeTitle}
        </Tag>
        <Image src={banner.pic} />
      </div>
    </Swiper.Item>
  ))

  return (
    <div className="find">
      <Swiper autoplay loop className="swiper">
        {items}
      </Swiper>
    </div>
  )
}
