-- CreateTable
CREATE TABLE "DevelopmentField" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DevelopmentTool" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "developmentFieldId" INTEGER NOT NULL,
    FOREIGN KEY ("developmentFieldId") REFERENCES "DevelopmentField" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SoftwarePlatform" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
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
    "tags" TEXT NOT NULL,
    "screenshots" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DevelopmentToolToProject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "DevelopmentTool" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ProjectToSoftwarePlatform" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "SoftwarePlatform" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_DevelopmentToolToProject_AB_unique" ON "_DevelopmentToolToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_DevelopmentToolToProject_B_index" ON "_DevelopmentToolToProject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToSoftwarePlatform_AB_unique" ON "_ProjectToSoftwarePlatform"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToSoftwarePlatform_B_index" ON "_ProjectToSoftwarePlatform"("B");
