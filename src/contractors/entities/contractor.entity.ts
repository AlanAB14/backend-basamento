import { Column, CreateDateColumn, Entity } from "typeorm";

@Entity()
export class Contractor {
    @Column({ primary: true, generated: true })
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    type_work?: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    updated_by: number;
}
