import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn } from 'typeorm';

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    menu_id: string;

    @CreateDateColumn()
    create_time:any
}
