import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTodoTable1610677988360 implements MigrationInterface {
    name = 'CreateTodoTable1610677988360'

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'Todo',
            columns: [
                {
                    name:'id',
                    type:'int',
                    isPrimary:true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name:"Name",
                    type: "varchar",
                    isNullable:false,
                },
                {
                    name:"Date",
                    type: "timestamp",
                    isNullable:false,
                },
                {
                    name:"Done",
                    type:"boolean",
                    isNullable:false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Todo");
    }

}
