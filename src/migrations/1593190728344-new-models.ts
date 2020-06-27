import {MigrationInterface, QueryRunner} from "typeorm";

export class newModels1593190728344 implements MigrationInterface {
    name = 'newModels1593190728344'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "currencies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_d528c54860c4182db13548e08c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vatrates" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "amount" integer NOT NULL, CONSTRAINT "PK_cd1a4fe6a7f412256f46ef94b70" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "expenses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "company_name" character varying NOT NULL, "total_amount" integer NOT NULL, "vat_amount" integer NOT NULL, "receipt_no" integer NOT NULL, "receipt_date" TIMESTAMP NOT NULL, "expense_deposit_date" TIMESTAMP NOT NULL, "vat_rate_id" uuid, "currency_id" uuid, CONSTRAINT "PK_94c3ceb17e3140abc9282c20610" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "first_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "last_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "password" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "expenses" ADD CONSTRAINT "FK_540e675c6f2020983dee60d6bd8" FOREIGN KEY ("vat_rate_id") REFERENCES "vatrates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "expenses" ADD CONSTRAINT "FK_560c9662c5564c5745c3ddf9983" FOREIGN KEY ("currency_id") REFERENCES "currencies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expenses" DROP CONSTRAINT "FK_560c9662c5564c5745c3ddf9983"`);
        await queryRunner.query(`ALTER TABLE "expenses" DROP CONSTRAINT "FK_540e675c6f2020983dee60d6bd8"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "password" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "last_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "first_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('USER')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "role" "users_role_enum" NOT NULL DEFAULT 'USER'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "avatar" character varying`);
        await queryRunner.query(`DROP TABLE "expenses"`);
        await queryRunner.query(`DROP TABLE "vatrates"`);
        await queryRunner.query(`DROP TABLE "currencies"`);
    }

}
