/*
  Warnings:

  - A unique constraint covering the columns `[ipfsHash]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Post_ipfsHash_key" ON "Post"("ipfsHash");
