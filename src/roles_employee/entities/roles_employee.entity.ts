import { Employee } from "src/employees/entities/employee.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class RolesEmployee {
    @Column({ primary: true, generated: true })
    id: number;

    @Column({ unique: true, nullable: false })
    role: string;

    @Column({ nullable: false })
    salary_per_hour: number;

    @OneToMany(() => Employee, (employee) => employee.role_id)
    employees: Employee[];

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updated_by: User;
}
