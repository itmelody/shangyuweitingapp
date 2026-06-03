# 违停查处应用 - GitHub Pages 部署指南

## 已完成配置

✅ **vite.config.ts** 已配置 `base: './'`
✅ **App.tsx** 根路径 `/` 指向 TailPhotoPage
✅ **路由系统** 使用 React Router DOM,打开即显示首页

## 部署步骤

### 1. 构建项目
```bash
npm run build
```

### 2. 推送到GitHub

```bash
# 初始化git仓库(如果还没有)
git init

# 添加所有文件
git add .

# 提交
git commit -m "feat: 违停查处应用 - 准备部署到GitHub Pages"

# 添加远程仓库(替换为你的GitHub仓库地址)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 推送到main分支
git push -u origin main
```

### 3. 启用GitHub Pages

1. 进入你的GitHub仓库
2. 点击 **Settings** (设置)
3. 左侧菜单找到 **Pages**
4. 在 **Source** 下选择:
   - Branch: `main`
   - Folder: `/docs` (需要先创建docs文件夹并将dist内容复制进去)
   
   或者使用 GitHub Actions 自动部署

### 4. 使用GitHub Actions自动部署(推荐)

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

### 5. 访问应用

部署成功后,访问:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## 特性说明

- ✅ 打开index.html自动显示TailPhotoPage(违停查处首页)
- ✅ 所有页面跳转通过React Router管理
- ✅ 支持SPA单页应用路由
- ✅ 已配置相对路径,适配GitHub Pages

## 注意事项

⚠️ GitHub Pages默认使用Hash路由,当前配置使用Browser路由,可能需要额外配置

如果需要支持Hash路由,修改App.tsx:
```typescript
import { HashRouter, Routes, Route } from 'react-router-dom'
// 将 BrowserRouter 改为 HashRouter
```
