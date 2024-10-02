import { Column, CreateDateColumn, Entity } from "typeorm";

@Entity()
export class User {
    @Column({ primary: true, generated: true })
    id: number;

    @Column({unique: true, nullable: false})
    username: string;

    @Column({nullable: false, select: false})
    password: string;

    @Column({unique: true, nullable: false})
    email: string;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column({ type: 'text', nullable: true })
    avatar?: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
    
    role_id: number;
}
