# [中文标题] / [English title]

> 这是游戏作品资料模板。填写后可改名为 `02_Description.txt`，并与项目媒体一起归档。
> Game Jam 与游戏作品中的 Level / Whitebox 案例都属于 `category: "game"`；不要把本文件
> 当成新的 Studio 数据源。

## Project record / 项目登记

- **项目类型 / Project type（正文标签，不新增字段）**：`Game Jam` / `Level & Whitebox`
- **Slug**：`[lowercase-project-slug]`
- **Category**：`game`
- **Status**：`placeholder` / `ready`
- **年份 / Year**：`[YYYY]` 或 `[YYYY—YYYY]`
- **中文标题 / Chinese title**：[填写]
- **English title**：[Fill in]
- **中文职责 / Chinese role**：[填写个人职责、协作范围和产出]
- **English role**：[Describe individual role, scope, and contribution]
- **工具与引擎 / Tools & engine**：[例如 Unreal Engine · Blender · Figma]

## Summary / 项目简介

### 中文

[用 1—3 段说明项目主题、制作周期、团队规模、核心玩法或空间问题，以及个人贡献。]

### English

[In 1–3 paragraphs, describe the theme, production window, team context, core mechanic or spatial question, and your contribution.]

## Heroshot / 封面

- **File**：`/media/games/[project-slug]/03_Heroshot.webp`
- **用途 / Use**：项目卡片与详情页封面
- **中文图注或替代说明 / Chinese caption or alt note**：[填写]
- **English caption or alt note**：[Fill in]

图片应是没有预先叠加标题、按钮或说明文字的公开版本。导入原图时保持比例，最长边不超过
1920 px；小图不放大，并保留原始素材。

## Gallery / 画廊

按网页展示顺序记录每一张图片；路径最终写入现有 `Project.gallery` 数组。若是白盒项目，
可在说明中标出机位、版本和变更原因，但不要新增 `galleryCaptions` 字段。

### 01

- **File**：`/media/games/[project-slug]/01_Image/011_Gameplay/01_[name].webp`
- **中文说明 / Chinese caption**：[说明画面展示的玩法、空间关系或设计决策]
- **English caption**：[Describe the gameplay, spatial relationship, or design decision shown]

### 02

- **File**：`/media/games/[project-slug]/01_Image/011_Gameplay/02_[name].webp`
- **中文说明 / Chinese caption**：[填写]
- **English caption**：[Fill in]

### 03（可选白盒过程）

- **File**：`/media/games/[project-slug]/01_Image/012_Whitebox/03_[name].webp`
- **机位 / Viewpoint**：[固定机位名称，或填写 N/A]
- **版本 / Version**：[例如 V0.1]
- **中文说明 / Chinese caption**：[填写]
- **English caption**：[Fill in]
- **变更原因 / Change reason**：[如适用，说明测试反馈和空间调整]

## Links / 链接

- **Playable / demo / 试玩地址（`externalUrl`，可选）**：`[https://…]`
- **Trailer / video / 演示视频（`videoUrl`，可选）**：`[https://…]`
- **访问说明 / Access note**：[是否无需登录、是否有平台或版本限制]

## Publication check / 发布检查

- [ ] 素材已获准公开，无 NDA 或客户保密内容。
- [ ] 画面、字体、音频和第三方素材已确认授权。
- [ ] 原图副本已按比例压到最长边不超过 1920 px；小图未放大。
- [ ] `cover` 指向根目录 `03_Heroshot.*`，`gallery` 顺序与本节一致。
- [ ] `externalUrl` / `videoUrl`（如有）对访客可访问。
