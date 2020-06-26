import {MigrationInterface, QueryRunner} from "typeorm";

export class vatModule21593169339378 implements MigrationInterface {
    name = 'vatModule21593169339378'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expenses" DROP CONSTRAINT "FK_540e675c6f2020983dee60d6bd8"`);
        await queryRunner.query(`CREATE TABLE "vatrates" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "amount" integer NOT NULL, CONSTRAINT "PK_cd1a4fe6a7f412256f46ef94b70" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "currencies" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "expenses" ADD CONSTRAINT "FK_540e675c6f2020983dee60d6bd8" FOREIGN KEY ("vat_rate_id") REFERENCES "vatrates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expenses" DROP CONSTRAINT "FK_540e675c6f2020983dee60d6bd8"`);
        await queryRunner.query(`ALTER TABLE "currencies" ADD "amount" integer NOT NULL`);
        await queryRunner.query(`DROP TABLE "vatrates"`);
        await queryRunner.query(`ALTER TABLE "expenses" ADD CONSTRAINT "FK_540e675c6f2020983dee60d6bd8" FOREIGN KEY ("vat_rate_id") REFERENCES "currencies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
