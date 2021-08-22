/*
  Warnings:

  - You are about to drop the column `screenshots` on the `Project` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "ProjectScreenshots" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "projectId" INTEGER,
    FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "repo" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "intro" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "coverUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dockerHubUrl" TEXT NOT NULL,
    "downloadUrl" TEXT NOT NULL,
    "tags" TEXT NOT NULL
);
INSERT INTO "new_Project" ("coverUrl", "description", "dockerHubUrl", "downloadUrl", "id", "intro", "language", "logo", "name", "repo", "tags", "type") SELECT "coverUrl", "description", "dockerHubUrl", "downloadUrl", "id", "intro", "language", "logo", "name", "repo", "tags", "type" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
