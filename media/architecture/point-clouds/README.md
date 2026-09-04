# Rhino point-cloud web assets

This directory is reserved for browser-ready point-cloud assets generated from user-provided Rhino models.

## Required safeguards

- Treat every Rhino source file as read-only. Never overwrite, edit, move, rename, or delete it.
- Before any save, cleanup, reduction, unit or coordinate change, export, or conversion, create a separate copy with an explicit suffix such as `working-copy` or `converted`. Record the source path, size, and modification time before work, then verify them again afterward.
- Store delivered web assets under a separate URL-safe project slug, for example `point-clouds/project-slug/`.
- Do not place temporary files, working copies, Rhino backups, caches, or unnecessary complete `.3dm` files anywhere in `public`.
- Inspect the real model's scale, coordinate range, object types, point count, and color source before choosing the browser format, LODs, compression, tiling, or viewer integration. Do not fabricate geometry.
- Any preview, cover, or explanatory image must be proportionally resized so its longest edge is at most 1920 px, must never be upscaled, and should use sensible web compression.

The Rhino model path has not yet been provided. Do not search for a model, open Rhino, or begin conversion until the user supplies the path in this task.
