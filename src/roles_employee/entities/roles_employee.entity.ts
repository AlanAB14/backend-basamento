import { Column, Entity } from "typeorm";

@Entity()
export class RolesEmployee {
    @Column({ primary: true, generated: true })
    id: number;

    @Column({ unique: true, nullable: false })
    role: string;

    @Column({ nullable: false })
    salary_per_hour: number;

    updated_by: number;
}
