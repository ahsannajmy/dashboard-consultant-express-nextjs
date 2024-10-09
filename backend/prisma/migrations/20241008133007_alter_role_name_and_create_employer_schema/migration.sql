/*
  Warnings:

  - The values [Base_User,Admin_User] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "EmployerRegistrationStatus" AS ENUM ('ACCEPTED', 'NEED_REVISION', 'PENDING');

-- CreateEnum
CREATE TYPE "Position" AS ENUM ('PARTNER', 'SENIOR_MANAGER', 'MANAGER', 'ASSISTANT_MANAGER', 'SENIOR_SPECIALIST', 'SPECIALIST', 'ADMIN');

-- CreateEnum
CREATE TYPE "SertificationStatus" AS ENUM ('A', 'B', 'C', 'NOT_A_TAX_CONSULTANT');

-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('BASE', 'ADMIN');
ALTER TABLE "User" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
COMMIT;

-- CreateTable
CREATE TABLE "Employer" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "status_registrasi" "EmployerRegistrationStatus" NOT NULL,
    "jabatan" "Position" NOT NULL,
    "status_sertifikasi" "SertificationStatus" NOT NULL,
    "status_kuasa_hukum" BOOLEAN NOT NULL,
    "izin_berlaku_pengacara" TIMESTAMP(3) NOT NULL,
    "izin_berlaku_konsultan" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employer_pkey" PRIMARY KEY ("id")
);
