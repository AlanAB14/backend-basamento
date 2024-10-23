import { RolesEmployee } from "src/roles_employee/entities/roles_employee.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Employee {
    @Column({ primary: true, generated: true })
    id: number;

    @Column({ nullable: true })
    username?: string;

    @Column({ nullable: true })
    password?: string;

    @Column({ nullable: true })
    email?: string;

    @Column({ nullable: false })
    name: string;
    
    @Column({ nullable: false })
    lastname: string;

    @Column({ type: 'text', nullable: true })
    avatar?: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
    
    @ManyToOne(() => RolesEmployee, (role) => role.employees)
    @JoinColumn({ name: 'role_id' })
    role_id: RolesEmployee;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updated_by: User;
}
