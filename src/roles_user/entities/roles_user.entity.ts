import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class RolesUser {
    @Column({ primary: true, generated: true })
    id: number;

    @Column({unique: true, nullable: false})
    role: string;

    @OneToMany(() => User, (user) => user.role_id)
    users: User[];
}
