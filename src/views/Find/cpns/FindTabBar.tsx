import Icons from '@/component/Icons'
import React from 'react'

export default function FindTabBar() {
  return (
    <div className="find-tab-bar">
      <div className="fined-tab-list">
        <div className="fined-icon-run">
          <Icons className="fined-icon" un="&#xe677;" />
        </div>
        <p className="fined-icon-text small">每日推荐</p>
      </div>
      <div className="fined-tab-list">
        <div className="fined-icon-run">
          <Icons className="font-sizes" un="&#xe60d;" />
        </div>
        <p className="fined-icon-text small">歌单</p>
      </div>
      <div className="fined-tab-list">
        <div className="fined-icon-run">
          <Icons className="fined-icon" un="&#xe6ad;" />
        </div>
        <p className="fined-icon-text small">排行榜</p>
      </div>
      <div className="fined-tab-list">
        <div className="fined-icon-run">
          <Icons className="fined-icon" un="&#xe65e;" />
        </div>
        <p className="fined-icon-text small">电台</p>
      </div>
      <div className="fined-tab-list">
        <div className="fined-icon-run">
          <Icons className="fined-icon" un="&#xe60c;" />
        </div>
        <p className="fined-icon-text small">直播</p>
      </div>
    </div>
  )
}
