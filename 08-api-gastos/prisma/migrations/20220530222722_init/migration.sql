-- CreateTable
CREATE TABLE "Gastos" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "article" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Gastos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GastosToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_GastosToType_AB_unique" ON "_GastosToType"("A", "B");

-- CreateIndex
CREATE INDEX "_GastosToType_B_index" ON "_GastosToType"("B");

-- AddForeignKey
ALTER TABLE "_GastosToType" ADD CONSTRAINT "_GastosToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Gastos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GastosToType" ADD CONSTRAINT "_GastosToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
