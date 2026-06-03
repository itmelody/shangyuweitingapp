import { useNavigate } from 'react-router-dom'
import { violationRecords } from '../data/violationRecords'
import './ViolationRecordsPage.css'

const ViolationRecordsPage = () => {
  const navigate = useNavigate()

  return (
    <div className="violation-records-page">
      {/* 顶部导航栏 */}
      <header className="page-header">
        <button className="back-btn clickable" onClick={() => navigate('/')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="page-title">违停记录</h1>
        <div className="header-actions">
          <button className="home-btn clickable" onClick={() => navigate('/')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="search-btn clickable">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* 主要内容区 */}
      <main className="page-content">
        {/* 违停记录列表 */}
        <div className="records-list">
          {violationRecords.map((record) => (
            <div key={record.id} className="record-card clickable" onClick={() => navigate(`/violation-detail?id=${record.id}`)}>
              {/* 上半部分:图片和信息 */}
              <div className="record-card-top">
                <div className="record-photo">
                  <img src={record.photoUrl} alt="车辆照片" />
                </div>
                <div className="record-info">
                  <div className="record-item">
                    <span className="record-label">车辆牌号：</span>
                    <span className="record-value">{record.plateNumber}</span>
                  </div>
                  <div className="record-item">
                    <span className="record-label">违停时间：</span>
                    <span className="record-value">{record.violationTime}</span>
                  </div>
                  <div className="record-item">
                    <span className="record-label">违停地点：</span>
                    <span className="record-value address">{record.address}</span>
                  </div>
                </div>
              </div>
              
              {/* 下半部分:处理类型和状态,带间隔线 */}
              <div className="record-item-inline">
                <div className="inline-item">
                  <span className="record-label">处理类型：</span>
                  <span className="record-value">{record.processType}</span>
                </div>
                <div className="inline-item status-icon">
                  {record.processStatus === '已审核' ? (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71539 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="status-text approved">已审核</span>
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#FF9800" strokeWidth="2"/>
                        <path d="M12 6V12L16 14" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="status-text pending">待审核</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 底部指示条 */}
      <footer className="page-footer">
        <div className="home-indicator"></div>
      </footer>
    </div>
  )
}

export default ViolationRecordsPage
