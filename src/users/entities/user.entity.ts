import { RolesUser } from "src/roles_user/entities/roles_user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";

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

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    lastname: string;

    @Column({ type: 'text', nullable: true })
    avatar?: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
    
    @ManyToOne(() => RolesUser, (role) => role.users, {eager: true})
    @JoinColumn({ name: 'role_id' })
    role_id: RolesUser;

    @DeleteDateColumn()
    deletedAt: Date;
}
