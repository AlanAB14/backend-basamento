import { Column, CreateDateColumn, Entity } from "typeorm";

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
    
    role_id: number;
    
    updated_by: number;

}
