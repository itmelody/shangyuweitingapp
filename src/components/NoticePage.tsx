import { useNavigate } from 'react-router-dom'
import './NoticePage.css'

const NoticePage = () => {
  const navigate = useNavigate()

  // 告知单数据
  const noticeData = {
    number: '90529264',
    plateNumber: '浙D7G12Z',
    plateType: '小型汽车',
    plateColor: '蓝色',
    violationTime: '2026-06-02 16:23',
    violationLocation: '绍兴市上虞区邱桥路与溪沁街交叉路口往西南约60米',
    issueDate: '2026年06月02日'
  }

  // 打印功能
  const handlePrint = (type: string) => {
    alert(`${type}打印功能开发中...`)
  }

  // 下一步
  const handleNextStep = () => {
    console.log('下一步操作')
    // 跳转到信息采集页面
    navigate('/info-collection')
  }

  return (
    <div className="notice-page">
      {/* 顶部导航栏 */}
      <header className="page-header">
        <button className="back-btn clickable" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="page-title">机动车不按规定停放告知单</h1>
        <button className="home-btn clickable" onClick={() => navigate('/')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* 主要内容区 */}
      <main className="page-content">
        {/* 告知单卡片 */}
        <div className="notice-card">
          {/* 标题 */}
          <div className="notice-header">
            <h2 className="notice-title">机动车不按规定停放告知单</h2>
            <p className="notice-number">编号: {noticeData.number}</p>
          </div>

          {/* 车辆信息 */}
          <div className="notice-info">
            <p className="info-item">
              <span className="info-label">号牌号码：</span>
              <span className="info-value underline">{noticeData.plateNumber}</span>
            </p>
            <p className="info-item">
              <span className="info-label">号牌种类：</span>
              <span className="info-value underline">{noticeData.plateType}</span>
            </p>
            <p className="info-item">
              <span className="info-label">号牌颜色：</span>
              <span className="info-value underline">{noticeData.plateColor}</span>
            </p>
            <p className="info-item">
              <span className="info-label">违法停车时间：</span>
              <span className="info-value underline">{noticeData.violationTime}</span>
            </p>
            <p className="info-item">
              <span className="info-label">违法停车地点：</span>
              <span className="info-value underline">{noticeData.violationLocation}</span>
            </p>
          </div>

          {/* 违法告知内容 */}
          <div className="notice-content">
            <p className="content-text">
              该机动车在上述时间、地点停放，违反了《中华人民共和国道路交通安全法》第五十六条第一款之规定，请于五个工作日后持本告知单、驾驶证和行驶证等有效证件到“执法窗口”接受处理；或者驾驶人在“交管12123”绑定车辆信息后，通过支付宝浙里办小程序搜索“绍兴违停处理”自助处理。
            </p>
            <p className="content-text">
             处理地址：绍兴市上虞区曹娥街道人民大道西段28非现场违法处理大厅综合执法窗口。
            </p>
          </div>

          {/* 二维码区域 */}
          <div className="qr-section">
            <div className="qr-item">
              <div className="qr-code">
                <img src="/alipay-qr.png" alt="支付宝二维码" className="qr-image" />
              </div>
              <p className="qr-label">支付宝二维码</p>
              <p className="officer-info">执法人员：33063020；33063032</p>
            </div>
            <div className="qr-item">
              <div className="qr-code">
                <img src="/zheliban-qr.png" alt="浙里办二维码" className="qr-image" />
              </div>
              <p className="qr-label">浙里办二维码</p>
            </div>
          </div>

          {/* 公章区域 */}
          <div className="stamp-section">
            <div className="stamp">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* 外圈 */}
                <circle cx="60" cy="60" r="55" stroke="#e74c3c" strokeWidth="3"/>
                {/* 内圈 */}
                <circle cx="60" cy="60" r="48" stroke="#e74c3c" strokeWidth="2"/>
                {/* 五角星 */}
                <polygon 
                  points="60,30 66,48 84,48 70,58 76,76 60,66 44,76 50,58 36,48 54,48" 
                  fill="#e74c3c"
                />
                {/* 文字 - 上弧 */}
                <text fontSize="8" fill="#e74c3c" fontWeight="bold">
                  <textPath href="#topArc">绍兴市上虞区综合行政执法局</textPath>
                </text>
    
                <defs>
                  <path id="topArc" d="M 20,60 A 40,40 0 1,1 100,60"/>
                  <path id="bottomArc" d="M 100,60 A 40,40 0 1,1 20,60"/>
                </defs>
              </svg>
            </div>
            <div className="stamp-info">
              <p className="stamp-org">绍兴市上虞区综合行政执法局</p>
              <p className="stamp-date">{noticeData.issueDate}</p>
            </div>
          </div>
        </div>
      </main>

      {/* 底部按钮 */}
      <footer className="page-footer">
        <div className="footer-buttons">
          <button className="print-btn clickable" onClick={() => handlePrint('蓝牙')}>
            蓝牙打印
          </button>
          <button className="next-btn clickable" onClick={handleNextStep}>
            下一步
          </button>
        </div>
        
        {/* 底部指示条 */}
        <div className="home-indicator"></div>
      </footer>
    </div>
  )
}

export default NoticePage
