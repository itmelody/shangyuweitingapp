// 违停记录数据
export interface ViolationRecord {
  id: number
  plateNumber: string
  vehicleType?: string
  plateColor?: string
  violationTime: string
  address: string
  handler1?: string
  handler2?: string
  violationDesc?: string
  photoUrl: string
  photos?: string[]
  processType: string
  processStatus: string
}

export const violationRecords: ViolationRecord[] = [
  {
    id: 1,
    plateNumber: '赣H·1xx55',
    vehicleType: '小型汽车',
    plateColor: '蓝色',
    violationTime: '2026-09-15 16:23:01',
    address: '绍兴市上虞区邱桥路与溪沁街交叉路口往西南约60米',
    handler1: '张三',
    handler2: '李四',
    violationDesc: '机动车违反规定停放,影响行人通行',
    photoUrl: '/record-car-1.png',
    photos: [
      '/record-car-1.png',
      '/record-car-2.png',
      '/record-car-3.png',
      '/record-car-4.png'
    ],
    processType: '柔性执法',
    processStatus: '待审核'
  },
  {
    id: 2,
    plateNumber: '浙A·D12345',
    vehicleType: '小型汽车',
    plateColor: '蓝色',
    violationTime: '2026-09-16 10:15:30',
    address: '绍兴市上虞区文三路与文二路交叉路口往东约100米',
    handler1: '王五',
    handler2: '赵六',
    violationDesc: '机动车违反规定停放,占用消防通道',
    photoUrl: '/record-car-2.png',
    photos: [
      '/record-car-1.png',
      '/record-car-2.png',
      '/record-car-3.png',
      '/record-car-4.png'
    ],
    processType: '处罚',
    processStatus: '已审核'
  },
  {
    id: 3,
    plateNumber: '浙A·E67890',
    vehicleType: '小型汽车',
    plateColor: '蓝色',
    violationTime: '2026-09-17 14:45:20',
    address: '绍兴市上虞区莫干山路与湖墅南路交叉口往西200米',
    handler1: '孙七',
    handler2: '周八',
    violationDesc: '机动车违反规定停放,影响交通通行',
    photoUrl: '/record-car-3.png',
    photos: [
      '/record-car-1.png',
      '/record-car-2.png',
      '/record-car-3.png',
      '/record-car-4.png'
    ],
    processType: '柔性执法',
    processStatus: '已审核'
  },
  {
    id: 4,
    plateNumber: '粤S·2T0H0',
    vehicleType: '小型汽车',
    plateColor: '蓝色',
    violationTime: '2026-09-18 09:30:15',
    address: '绍兴市上虞区江南大道与江汉路交叉口人行道往西',
    handler1: '吴九',
    handler2: '郑十',
    violationDesc: '机动车违反规定停放,占用盲道',
    photoUrl: '/record-car-4.png',
    photos: [
      '/record-car-1.png',
      '/record-car-2.png',
      '/record-car-3.png',
      '/record-car-4.png'
    ],
    processType: '处罚',
    processStatus: '待审核'
  }
]
