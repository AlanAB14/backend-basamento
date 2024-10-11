import { Column, CreateDateColumn, Entity } from "typeorm";

@Entity()
export class RegisterEmployeesWork {
    @Column({ primary: true, generated: true })
    id: number;

    employee_id: number;
    construction_id: number;

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
