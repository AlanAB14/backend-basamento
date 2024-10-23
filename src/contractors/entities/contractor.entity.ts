import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";

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

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updated_by: User;
}
