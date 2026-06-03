import { useState, useRef, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './TailPhotoPage.css'

const TailPhotoPage: FC = () => {
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [photoCount, setPhotoCount] = useState(0)

  // 处理拍照按钮点击
  const handleTakePhoto = () => {
    // 跳转到违停信息填写页面
    navigate('/violation-form')
  }

  // 处理照片选择
  const handlePhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setPhotoCount(prev => prev + files.length)
      // 这里可以添加照片预览或上传逻辑
      console.log('已选择照片:', files)
    }
  }

  return (
    <div className="tail-photo-page">
      {/* 顶部导航栏 */}
      <header className="page-header">
        <button className="back-btn clickable">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="page-title">违停查处</h1>
        <button className="home-btn clickable">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* 主要内容区 */}
      <main className="page-content">
        {/* 汽车图示区域 */}
        <div className="car-photo-area">
          <div className="car-photo-frame">
            {/* 四角L形标记 */}
            <div className="corner-mark corner-top-left"></div>
            <div className="corner-mark corner-top-right"></div>
            <div className="corner-mark corner-bottom-left"></div>
            <div className="corner-mark corner-bottom-right"></div>
            
            {/* 汽车图示 */}
            <div className="car-illustration">
              <svg width="280" height="160" viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* 汽车车身 */}
                <path d="M60 100C60 95 62 90 66 86L90 60C95 55 102 52 110 52H170C178 52 185 55 190 60L214 86C218 90 220 95 220 100V120H60V100Z" fill="#C8D8F0" stroke="#8BB4E8" strokeWidth="2"/>
                {/* 车窗 */}
                <path d="M95 62L115 54H165L185 62L195 80H85L95 62Z" fill="#A8C8E8" stroke="#8BB4E8" strokeWidth="1.5"/>
                {/* 车轮 */}
                <circle cx="95" cy="120" r="18" fill="#E8EEF4" stroke="#8BB4E8" strokeWidth="2"/>
                <circle cx="95" cy="120" r="8" fill="#C8D8F0"/>
                <circle cx="185" cy="120" r="18" fill="#E8EEF4" stroke="#8BB4E8" strokeWidth="2"/>
                <circle cx="185" cy="120" r="8" fill="#C8D8F0"/>
                {/* 车尾灯 */}
                <rect x="215" y="95" width="8" height="12" rx="2" fill="#FF6B6B"/>
                <rect x="57" y="95" width="8" height="12" rx="2" fill="#FF6B6B"/>
              </svg>
              {/* 地面阴影 */}
              <div className="car-shadow"></div>
            </div>
          </div>
        </div>

        {/* 文字说明区域 */}
        <div className="instruction-area">
          <h2 className="instruction-title">车尾照应清晰反映出：</h2>
          <ul className="instruction-list">
            <li>机动车辆侵占人行道（含盲道）路面的情况</li>
            <li>机动车辆的号牌</li>
            <li>机动车辆所在位置的相关建筑物或者参照物等</li>
          </ul>
        </div>
      </main>

      {/* 底部操作区 */}
      <footer className="page-footer">
        <button className="photo-btn clickable" onClick={handleTakePhoto}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>拍摄车尾照</span>
          {photoCount > 0 && <span className="photo-badge">{photoCount}</span>}
        </button>
        
        <button className="records-link clickable" onClick={() => navigate('/violation-records')}>
          违停记录
        </button>
        
        {/* 底部指示条 */}
        <div className="home-indicator"></div>
      </footer>

      {/* 隐藏的文件输入框 */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        multiple
        style={{ display: 'none' }}
        onChange={handlePhotoSelected}
      />
    </div>
  )
}

export default TailPhotoPage