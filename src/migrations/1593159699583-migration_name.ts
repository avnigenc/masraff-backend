import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationName1593159699583 implements MigrationInterface {
    name = 'migrationName1593159699583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('USER')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "role" "users_role_enum" NOT NULL DEFAULT 'USER'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "avatar" character varying`);
    }

}
