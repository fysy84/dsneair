# DSNE AIR 项目开发边界规则

## 1. 字体规则（绝对禁止）
- ❌ **禁止使用任何 serif（衬线）字体**
- ✅ 只能使用：Inter, Space Grotesk, system-ui, -apple-system, sans-serif
- ✅ `--font-serif` 变量必须指向无衬线字体
- ✅ `body` 的 font-family 必须是无衬线字体栈

## 2. 翻译规则（绝对禁止）
- ❌ **中文版页面中不得出现任何英文文本**
- ✅ 所有用户可见文本必须通过 `t()` 函数调用
- ✅ 翻译词典必须覆盖所有页面的所有文本
- ✅ alt 属性、placeholder、按钮文字、标题、描述等全部需要翻译
- ✅ 技术术语（如 JB/T 6430-2002、380V、50Hz）可以保留，但说明文字必须翻译

## 3. Logo 规则
- ✅ 使用内联 SVG 组件 `DsneLogo`，不依赖外部 URL
- ✅ Navbar 和 Footer 都必须使用 `<DsneLogo />`

## 4. 图片规则
- ✅ 所有图片放在 `public/images/` 目录
- ✅ 使用相对路径 `/images/xxx.png`

## 5. 构建规则
- ✅ 每次修改后必须 `npm run build` 验证通过
- ✅ TypeScript 编译必须无错误
