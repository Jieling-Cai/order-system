import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn } from 'typeorm';

@Entity()
export class Guestinfo {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    restaurant_id: string;

    @CreateDateColumn()
    create_time:any
}
