import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Construction {
    @Column({ primary: true, generated: true })
    id: number;

    @Column({ nullable: false })
    name?: string;

    @Column({ unique: true, nullable: false})
    address: string;

    @Column({ nullable: true })
    lat_long?: number;

    @Column({ type: 'text', nullable: true })
    image?: string;

    @Column({ nullable: false })
    owner: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updated_by: User;
}
