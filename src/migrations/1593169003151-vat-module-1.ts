import {MigrationInterface, QueryRunner} from "typeorm";

export class vatModule11593169003151 implements MigrationInterface {
    name = 'vatModule11593169003151'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "currencies" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "currencies" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "currencies" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "currencies" ADD "amount" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "currencies" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "currencies" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "currencies" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "currencies" ADD "amount" integer NOT NULL`);
    }

}
