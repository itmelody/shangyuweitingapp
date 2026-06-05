import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './ViolationFormPage.css'

const ViolationFormPage = () => {
  const navigate = useNavigate()
  const tailPhotoInputRef = useRef<HTMLInputElement>(null)
  const headPhotoInputRef = useRef<HTMLInputElement>(null)
  const BASE_URL = import.meta.env.BASE_URL
  
  // 弹窗状态
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  
  // 表单状态
  const [tailPhotoUrl, setTailPhotoUrl] = useState(`${BASE_URL}tail-car-photo.png`)
  const [headPhotoUrl, setHeadPhotoUrl] = useState<string>('')
  const [plateNumber] = useState('浙D7G12Z')
  const [lastViolationTime] = useState('2026-03-02 16:13:56')
  const [vehicleType] = useState('小型汽车')
  const [plateColor] = useState('蓝色')
  const [violationTime] = useState('2026-06-02 16:23:01')
  const [address] = useState('绍兴市上虞区邱桥路与溪沁街交叉路口往西南约60米')
  const [handler1] = useState('张三')
  const [handler2] = useState('李四')
  const [violationDesc, setViolationDesc] = useState('')

  // 处理车尾照上传
  const handleTailPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setTailPhotoUrl(url)
    }
  }

  // 触发车尾照选择
  const triggerTailPhotoUpload = () => {
    tailPhotoInputRef.current?.click()
  }

  // 处理车头照上传
  const handleHeadPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setHeadPhotoUrl(url)
    }
  }

  // 触发车头照选择
  const triggerHeadPhotoUpload = () => {
    headPhotoInputRef.current?.click()
  }

  // 删除车头照
  const deleteHeadPhoto = () => {
    setHeadPhotoUrl('')
  }

  // 删除车尾照
  const deleteTailPhoto = () => {
    setShowDeleteModal(true)
  }

  // 确认删除车尾照
  const confirmDeleteTailPhoto = () => {
    setShowDeleteModal(false)
    setTailPhotoUrl('') // 清空车尾照
  }

  // 取消删除车尾照
  const cancelDeleteTailPhoto = () => {
    setShowDeleteModal(false)
  }

  // 语音输入功能(模拟)(保留供后续使用)
  // const handleVoiceInput = (field: string) => {
  //   console.log('语音输入:', field)
  //   // 这里可以集成语音识别API
  //   alert('语音输入功能开发中...')
  // }

  // 定位功能
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          console.log('当前位置:', latitude, longitude)
          alert(`已获取位置: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`)
        },
        (error) => {
          alert('获取位置失败: ' + error.message)
        }
      )
    } else {
      alert('浏览器不支持定位功能')
    }
  }

  // 车辆类型选项(保留供后续使用)
  // const vehicleTypes = ['小型汽车', '大型汽车', '教练汽车', '小型新能源汽车', '大型新能源汽车']
  // 号牌颜色选项(保留供后续使用)
  // const plateColors = ['蓝色', '黄色', '白色', '黑色', '绿色']

  // 柔性执法
  const handleFlexibleEnforcement = () => {
    console.log('柔性执法:', {
      tailPhotoUrl,
      headPhotoUrl,
      plateNumber,
      vehicleType,
      plateColor,
      violationTime,
      address,
      handler1,
      handler2,
      violationDesc
    })
    
    // 显示确认弹窗
    setShowConfirmModal(true)
  }

  // 确认柔性执法
  const confirmFlexibleEnforcement = () => {
    setShowConfirmModal(false)
    // 跳转到首页
    navigate('/')
  }

  // 取消柔性执法
  const cancelFlexibleEnforcement = () => {
    setShowConfirmModal(false)
  }

  // 处罚
  const handlePunishment = () => {
    console.log('处罚:', {
      tailPhotoUrl,
      headPhotoUrl,
      plateNumber,
      vehicleType,
      plateColor,
      violationTime,
      address,
      handler1,
      handler2,
      violationDesc
    })
    // 跳转到违法停车告知单页面
    navigate('/notice')
  }

  return (
    <div className="violation-form-page">
      {/* 顶部导航栏 */}
      <header className="page-header">
        <button className="back-btn clickable" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="page-title">违停查处</h1>
        <button className="home-btn clickable" onClick={() => navigate('/')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* 主要内容区 */}
      <main className="page-content">
        {/* 照片上传区域 */}
        <div className="photo-upload-section">
          <div className="photo-row">
            {/* 车尾照 */}
            <div className="photo-container">
              {tailPhotoUrl ? (
                <>
                  <img src={tailPhotoUrl} alt="车尾照" className="car-photo" />
                  <button className="delete-photo-btn clickable" onClick={deleteTailPhoto}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6H5H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </>
              ) : (
                <button className="upload-photo-btn clickable" onClick={triggerTailPhotoUpload}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>车尾照</span>
                </button>
              )}
            </div>

            {/* 车头照 */}
            <div className="photo-container">
              {headPhotoUrl ? (
                <>
                  <img src={headPhotoUrl} alt="车头照" className="car-photo" />
                  <button className="delete-photo-btn clickable" onClick={deleteHeadPhoto}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6H5H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </>
              ) : (
                <button className="upload-photo-btn clickable" onClick={triggerHeadPhotoUpload}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>车头照</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 表单区域 */}
        <div className="form-section">
          {/* 车辆牌号 */}
          <div className="form-item">
            <label className="form-label">
              车辆牌号 <span className="required">*</span>
            </label>
            <div className="form-value-row">
              <span className="form-value">{plateNumber}</span>
              <button className="scan-btn clickable" onClick={() => alert('扫描识别功能开发中...')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 3H5C3.89543 3 3 3.89543 3 5V7" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 3H19C20.1046 3 21 3.89543 21 5V7" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 21H5C3.89543 21 3 20.1046 3 19V17" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 21H19C20.1046 21 21 20.1046 21 19V17" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V16" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* 最近一次违停时间提示 */}
          <div className="last-violation-tip">
            最近一次违停时间: {lastViolationTime}
          </div>

          {/* 车辆类型 */}
          <div className="form-item">
            <label className="form-label">
              车辆类型 <span className="required">*</span>
            </label>
            <div className="form-value-row">
              <span className="form-value">{vehicleType}</span>
              <button className="dropdown-btn clickable" onClick={() => alert('车辆类型选择器开发中...')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* 号牌颜色 */}
          <div className="form-item">
            <label className="form-label">
              号牌颜色 <span className="required">*</span>
            </label>
            <div className="form-value-row">
              <span className="form-value">{plateColor}</span>
              <button className="dropdown-btn clickable" onClick={() => alert('号牌颜色选择器开发中...')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* 违停时间 */}
          <div className="form-item">
            <label className="form-label">
              违停时间 <span className="required">*</span>
            </label>
            <div className="form-value-row">
              <span className="form-value">{violationTime}</span>
              <button className="dropdown-btn clickable" onClick={() => alert('时间选择器开发中...')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* 违停地点 */}
          <div className="form-item">
            <label className="form-label">
              违停地点 <span className="required">*</span>
            </label>
            <div className="form-value-row">
              <span className="form-value multi-line">{address}</span>
              <button className="location-btn clickable" onClick={handleLocation}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="9" r="2.5" stroke="#2196F3" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>

          {/* 承办人员 */}
          <div className="form-item">
            <label className="form-label">
              承办人员 <span className="required">*</span>
            </label>
            <div className="handler-row">
              <span className="handler-name clickable" onClick={() => alert('选择承办人员1')}>{handler1}</span>
              <div className="handler-divider"></div>
              <span className="handler-name clickable" onClick={() => alert('选择承办人员2')}>{handler2}</span>
              <button className="dropdown-btn clickable" onClick={() => alert('承办人员选择器开发中...')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* 违停描述 */}
          <div className="form-item">
            <label className="form-label">违停描述</label>
            <div className="form-value-row">
              <input 
                type="text" 
                className="remark-input" 
                placeholder="请输入违停描述" 
                value={violationDesc}
                onChange={(e) => setViolationDesc(e.target.value)}
              />
            </div>
          </div>
        </div>
      </main>

      {/* 底部按钮 */}
      <footer className="page-footer">
        <div className="footer-buttons">
          <button className="flexible-btn clickable" onClick={handleFlexibleEnforcement}>
            柔性执法
          </button>
          <button className="punish-btn clickable" onClick={handlePunishment}>
            处罚
          </button>
        </div>
        
        {/* 底部指示条 */}
        <div className="home-indicator"></div>
      </footer>

      {/* 隐藏的文件输入框 */}
      <input
        ref={tailPhotoInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleTailPhotoUpload}
      />
      <input
        ref={headPhotoInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleHeadPhotoUpload}
      />

      {/* 确认弹窗 */}
      {showConfirmModal && (
        <div className="modal-overlay" onClick={cancelFlexibleEnforcement}>
          <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <p className="modal-text">请确认是否进行柔性执法？</p>
            </div>
            <div className="modal-footer">
              <button className="modal-btn modal-btn-cancel clickable" onClick={cancelFlexibleEnforcement}>
                取消
              </button>
              <button className="modal-btn modal-btn-confirm clickable" onClick={confirmFlexibleEnforcement}>
                确认
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 删除照片确认弹窗 */}
      {showDeleteModal && (
        <div className="modal-overlay" onClick={cancelDeleteTailPhoto}>
          <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <p className="modal-text">请确认是否删除照片？</p>
            </div>
            <div className="modal-footer">
              <button className="modal-btn modal-btn-cancel clickable" onClick={cancelDeleteTailPhoto}>
                取消
              </button>
              <button className="modal-btn modal-btn-confirm clickable" onClick={confirmDeleteTailPhoto}>
                确认
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ViolationFormPage
