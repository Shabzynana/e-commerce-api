// User.ts
import { Entity, Column, OneToMany } from 'typeorm';
import { getIsInvalidMessage } from "../utils";
import { IsEmail } from "class-validator";
import ExtendedBaseEntity from '../base-entity';

// import { Order } from './Order';
// import { Review } from './Review';
// import { SupportTicket } from './SupportTicket';

@Entity()
export class User extends ExtendedBaseEntity {

    @Column({ unique: true, nullable: false })
    @IsEmail(undefined, { message: getIsInvalidMessage("Email") })
    email: string;

    @Column({ nullable: true })
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ nullable: true })
    google_id: string;

    @Column({ default: false })
    is_verified: boolean;

    @Column({ nullable: true })
    is_verified_date: Date;

    // Soft delete flag
    @Column({ default: false })
    is_deleted: boolean;

    // @OneToMany(() => Order, order => order.user)
    // orders: Order[];

    // @OneToMany(() => Review, review => review.user)
    // reviews: Review[];

    // @OneToMany(() => SupportTicket, supportTicket => supportTicket.user)
    // supportTickets: SupportTicket[];
}
