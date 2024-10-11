import { Column, CreateDateColumn, Entity } from "typeorm";

@Entity()
export class RegisterContractorsWork {
    @Column({ primary: true, generated: true })
    id: number;

    contractor_id: number;
    construction_id: number;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    date_start: string;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    date_end: string;
    
    @Column({ nullable: false })
    budget: number;

    @Column({ type: 'text', nullable: true })
    receipt?: string;

    @Column({ nullable: false, default: false })
    paid: boolean;

    @CreateDateColumn({ type: 'timestamp', nullable: true, default: null })
    date_paid: Date;
}
