import mongoose from 'mongoose';
import { OrderStatus } from '@sirmctickets/commontickets';

interface OrderAttrs {
	id: string;
	version: number;
	userId: string;
	price: number;
	status: OrderStatus;
}

interface OrderDoc extends mongoose.Document {
	version: number;
	userId: string;
	price: number;
	status: OrderStatus;
}

interface OrderModel extends mongoose.Model<OrderDoc> {
	build(attrs: OrderAttrs): OrderDoc;
}