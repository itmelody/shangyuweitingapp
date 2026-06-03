import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './InfoCollectionPage.css'

const InfoCollectionPage = () => {
  const navigate = useNavigate()
  const [smsNotification, setSmsNotification] = useState(true)
  const [collectedPhotos, setCollectedPhotos] = useState<string[]>([])
  const photoInputRef = useRef<HTMLInputElement>(null)

  // 照片上传处理
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setCollectedPhotos(prev => [...prev, url])
    }
  }

  // 触发文件选择
  const triggerPhotoUpload = () => {
    photoInputRef.current?.click()
  }

  // 删除照片
  const deletePhoto = (index: number) => {
    if (index === -1) {
      alert('示例图片不可删除')
      return
    }
    setCollectedPhotos(prev => prev.filter((_, i) => i !== index))
  }

  // 提交表单
  const handleSubmit = () => {
    console.log('提交信息采集:', {
      photos: collectedPhotos,
      smsNotification
    })
    // 跳转到首页
    navigate('/')
  }

  return (
    <div className="info-collection-page">
      {/* 顶部导航栏 */}
      <header className="page-header">
        <button className="back-btn clickable" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="page-title">视图信息采集</h1>
        <button className="home-btn clickable" onClick={() => navigate('/')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* 主要内容区 */}
      <main className="page-content">
        {/* 照片采集区域 */}
        <div className="photo-section">
          <div className="photo-grid">
            {/* 示例图片1 */}
            <div className="photo-item">
              <img src="/car-photo1.png" alt="示例图片1" className="photo-preview" />
              <button className="delete-photo-btn clickable" onClick={() => deletePhoto(-1)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H5H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* 示例图片2 */}
            <div className="photo-item">
              <img src="/car-photo2.png" alt="示例图片2" className="photo-preview" />
              <button className="delete-photo-btn clickable" onClick={() => deletePhoto(-1)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H5H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* 已采集的照片 */}
            {collectedPhotos.map((photo, index) => (
              <div key={index} className="photo-item">
                <img src={photo} alt={`采集照片${index + 1}`} className="photo-preview" />
                <button className="delete-photo-btn clickable" onClick={() => deletePhoto(index)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H5H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}

            {/* 贴单近照 */}
            {collectedPhotos.length === 0 && (
              <button className="photo-upload-btn clickable" onClick={triggerPhotoUpload}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H4L6 3H18L20 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="13" r="4" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="photo-label">贴单近照</span>
              </button>
            )}

            {/* 贴单远照 */}
            {collectedPhotos.length <= 1 && (
              <button className="photo-upload-btn clickable" onClick={triggerPhotoUpload}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H4L6 3H18L20 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="13" r="4" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="photo-label">贴单远照</span>
              </button>
            )}

            {/* 更多照片 */}
            <button className="photo-upload-btn clickable" onClick={triggerPhotoUpload}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12H19" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="photo-label">更多</span>
            </button>
          </div>
        </div>

        {/* 短信通知开关 */}
        <div className="sms-section">
          <div className="sms-row">
            <span className="sms-label">是否短信告知当事人</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={smsNotification}
                onChange={(e) => setSmsNotification(e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </main>

      {/* 底部提交按钮 */}
      <footer className="page-footer">
        <button className="submit-btn clickable" onClick={handleSubmit}>
          提交
        </button>
        
        {/* 底部指示条 */}
        <div className="home-indicator"></div>
      </footer>

      {/* 隐藏的文件输入框 */}
      <input
        ref={photoInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handlePhotoUpload}
      />
    </div>
  )
}

export default InfoCollectionPage
