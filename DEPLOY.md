# 违停查处应用 - GitHub Pages 部署指南

## 当前配置状态

✅ **vite.config.ts** 已配置 `base: '/shangyuweitingapp/'`
✅ **App.tsx** 使用 HashRouter,适配GitHub Pages
✅ **TypeScript错误** 已修复所有未使用变量
✅ **构建成功** dist目录已生成

## 部署步骤

### 方法一:直接推送dist目录(最简单)

```bash
# 1. 构建项目
npm run build

# 2. 初始化git仓库(如果还没有)
git init

# 3. 添加所有文件
git add .

# 4. 提交
git commit -m "feat: 违停查处应用 - 准备部署到GitHub Pages"

# 5. 添加远程仓库
git remote add origin https://github.com/itmelody/shangyuweitingapp.git

# 6. 推送到main分支
git push -u origin main
```

### 方法二:使用GitHub Actions自动部署(推荐)

在项目根目录创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v3
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

然后推送代码,GitHub Actions会自动构建和部署。

### 方法三:手动启用GitHub Pages

1. 推送代码到GitHub:
```bash
git push origin main
```

2. 进入你的GitHub仓库: https://github.com/itmelody/shangyuweitingapp

3. 点击 **Settings** (设置)

4. 左侧菜单找到 **Pages**

5. 在 **Build and deployment** 下设置:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`

6. 点击 **Save**

7. 等待几分钟,访问: https://itmelody.github.io/shangyuweitingapp/

## 访问地址

部署成功后,访问:
```
https://itmelody.github.io/shangyuweitingapp/
```

## 配置说明

### vite.config.ts
```typescript
base: '/shangyuweitingapp/',  // 必须与GitHub仓库名称一致
```

### App.tsx
```typescript
import { HashRouter, Routes, Route } from 'react-router-dom'
// 使用 HashRouter 而不是 BrowserRouter
```

## 常见问题

### Q: 为什么打开是空白页?
A: 确保 `vite.config.ts` 中的 `base` 路径与仓库名称一致。

### Q: 如何更新部署?
A: 修改代码后,重新运行 `npm run build`,然后推送到GitHub:
```bash
git add .
git commit -m "更新内容"
git push
```

### Q: 页面跳转有问题?
A: 我们使用 HashRouter,URL会显示为 `/#/violation-form` 这种格式,这是正常的。

## 特性说明

- ✅ 打开即显示TailPhotoPage(违停查处首页)
- ✅ 所有页面跳转正常工作
- ✅ 支持SPA单页应用路由
- ✅ 已配置正确的base路径,适配GitHub Pages
- ✅ 使用HashRouter,兼容静态托管
