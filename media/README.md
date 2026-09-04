# Portfolio 素材库

请把准备公开的作品素材放在这个目录。网页会以 `/media/...` 的形式读取它们。

```text
public/media/
├── architecture/<project-slug>/
│   ├── cover.webp          # 项目卡片与详情页封面
│   ├── gallery-01.webp     # 过程图或效果图
│   └── demo.mp4            # 可选：项目视频
├── games/<project-slug>/
│   ├── cover.webp
│   ├── gallery-01.webp
│   └── trailer.mp4
└── level-whitebox/<viewpoint-id>/
    ├── v01.webp            # 同一固定机位的第一个版本
    ├── v02.webp
    └── v03.webp
```

示例：把建筑项目 `harbour-library` 的封面放在：

```text
public/media/architecture/harbour-library/cover.webp
```

它在网页中对应的路径是：

```text
/media/architecture/harbour-library/cover.webp
```

建议使用 `.webp`、`.jpg`、`.png` 或 `.mp4`。图片建议压缩到单张 2 MB 左右；视频建议先上传至 Vimeo、YouTube 或其他视频平台，再把链接填入项目资料，以避免网站加载过慢。

## 目前的更新方式

在放入素材后，更新 `app/portfolio-data.ts` 里的项目名称、介绍、年份、职责、工具和素材路径。这个文件是网站目前的内容总表。

## 可视化编辑器

下一步可以加入受登录保护的内容管理页，让你在网页里新增项目、编辑中英文介绍、选择封面、排列图库和填写视频链接。要让这些改动能保存并发布给访客，编辑器会使用网站的数据库和素材存储；这样就不必手改程式文件。管理员帐号范围与发布方式需要先确定。

只放入已获准公开的公司项目素材，并避免上传客户、雇主或 NDA 限制内容。
