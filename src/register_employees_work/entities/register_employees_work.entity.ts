import { Construction } from "src/constructions/entities/construction.entity";
import { Employee } from "src/employees/entities/employee.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class RegisterEmployeesWork {
    @Column({ primary: true, generated: true })
    id: number;

    @ManyToOne(() => Employee)
    @JoinColumn({ name: 'employee_id' })
    employee: Employee;

    @ManyToOne(() => Construction)
    @JoinColumn({ name: 'construction_id' })
    construction: Construction;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    date_work: Date;

    @Column({ nullable: false })
    time_work: number;
    
    @Column({ type: 'text', nullable: true })
    receipt?: string;

    @Column({ nullable: false, default: false })
    paid: boolean;

    @CreateDateColumn({ type: 'timestamp', nullable: true, default: null })
    date_paid: Date;
}
