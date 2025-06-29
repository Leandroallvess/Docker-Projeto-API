/*
  Warnings:

  - Added the required column `atualizadoEm` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "atualizadoEm" TIMESTAMP(3) NOT NULL;
