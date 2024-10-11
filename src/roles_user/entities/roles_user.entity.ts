import { Column, Entity } from "typeorm";

@Entity()
export class RolesUser {
    @Column({ primary: true, generated: true })
    id: number;

    @Column({unique: true, nullable: false})
    role: string;
}
