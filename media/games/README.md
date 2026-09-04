# 游戏作品素材目录

这里存放准备公开的游戏作品媒体。Game Jam、关卡设计和白盒原型都属于
“游戏作品”归档，项目资料在 `app/portfolio-data.ts` / Content Studio 中使用
现有的 `Project` 结构维护；这里不创建新的 JSON、TS 或数据库数据源。

## 与现有建筑目录的对应关系

每个正式游戏项目使用与建筑项目相同的三段式分工：

```text
public/media/games/<project-slug>/
├── 01_Image/
│   ├── 011_Gameplay/       # 游戏画面、玩法、UI、地图或系统过程图
│   └── 012_Whitebox/       # 关卡/白盒过程图（若该项目包含）
├── 02_Description/
│   └── 02_Description.txt  # 中英项目资料与画廊说明
├── 03_Heroshot.webp        # 项目详情页封面 / Hero shot，文件在项目根目录
└── README.md               # 可选：该项目的素材与授权备注
```

建筑目录的 `03_Heroshot.*` 是根目录文件，不单独建立 `03_Heroshot/` 文件夹；
游戏项目沿用这一约定。封面可使用 `.webp`、`.jpg`、`.jpeg` 或 `.png`，但在
项目资料中应将它映射为现有 `Project.cover`；图库文件按顺序映射为
`Project.gallery`。

## 添加一个项目

1. 复制 `_TEMPLATE/` 为 `games/<project-slug>/`，其中 slug 只使用小写英文、数字和连字符。
2. 按项目内容保留 `011_Gameplay`、`012_Whitebox` 中需要的目录，并把公开媒体放入其中。
3. 将 `02_Description/02_Description.template.md` 改名为
   `02_Description.txt`（如果使用模板目录中的当前版本），填写中英项目资料和每张图库的说明。
4. 将一张公开封面放在项目根目录，命名为 `03_Heroshot.webp` 或其他允许的图片扩展名。
5. 在唯一内容源 `app/portfolio-data.ts` 或 Content Studio 中登记项目字段：`slug`、`category`、`status`、
   `year`、`title`、`role`、`summary`、`tools`、`cover`、`gallery`、`externalUrl` 和 `videoUrl`。

### 项目类型边界

- Game Jam 与游戏作品中的关卡/白盒案例：使用现有 `category: "game"`，子类型写在描述正文或摘要中。
- 现有 `/level-design` 的关卡白盒知识库：继续使用 `category: "level"` 与 `viewpoints`，不把它复制到这里。
- `space-play-v1/` 是首页视觉演示素材，不是正式游戏项目目录；本轮不改动、不重复导入它。

## 图片、视频和授权规则

- `public/` 只放已获准公开的网页媒体；不要放 UE/Unity 工程、源模型、缓存、未压缩原视频或构建包。
- 导入原图时保持比例，将最长边缩至不超过 1920 px；已经更小的图不放大。使用合理的网页压缩，保留清晰度并控制体积。
- 处理时保留原始素材，不覆盖源文件。视频优先上传到 Vimeo、YouTube 或其他视频平台，在 `videoUrl` 中填写链接；可玩的构建、试玩页或演示地址填写 `externalUrl`。
- 上传前确认没有 NDA、客户保密或第三方素材授权问题。

## 模板位置

- 当前工作树模板：`C:\Users\dearh\.codex\worktrees\8238\portfolio-site\public\media\games\_TEMPLATE\`
- 合入主干后的对应位置：`E:\Personal Docs\portfolio-site\public\media\games\_TEMPLATE\`
- 某个项目的合入主干路径：`E:\Personal Docs\portfolio-site\public\media\games\<project-slug>\`

模板目录只包含说明和占位模板，不代表一个虚构项目，不应登记到 `portfolio-data.ts`。
