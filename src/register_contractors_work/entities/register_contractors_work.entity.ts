import { Construction } from "src/constructions/entities/construction.entity";
import { Contractor } from "src/contractors/entities/contractor.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class RegisterContractorsWork {
    @Column({ primary: true, generated: true })
    id: number;

    @ManyToOne(() => Contractor)
    @JoinColumn({ name: 'contractor_id' })
    contractor: Contractor;

    @ManyToOne(() => Construction)
    @JoinColumn({ name: 'construction_id' })
    construction: Construction;

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
