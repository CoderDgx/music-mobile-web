import React from 'react'

import { useRequest } from 'ahooks'
import { getBanner } from '@/api/find'

import './index.scss'
import { Swiper, Image, Tag } from 'antd-mobile'
import FindTabBar from './cpns/FindTabBar'

export default function Find() {
  const { data: banners } = useRequest(getBanner)

  const BannerItems = banners?.map((banner: any) => (
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
      <div className="top-content">
        <Swiper autoplay loop className="swiper">
          {BannerItems}
        </Swiper>
      </div>
      <FindTabBar />
    </div>
  )
}
