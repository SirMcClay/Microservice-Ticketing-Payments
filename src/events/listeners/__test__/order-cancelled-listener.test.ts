import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';
import { OrderStatus, OrderCancelledEvent } from '@sirmctickets/commontickets';
import { OrderCancelledListener } from '../order-cancelled-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { Order } from '../../../models/order';

const setup = async () => {
	const listener = new OrderCancelledListener(natsWrapper.client);

	const order = Order.build({
		id: mongoose.Types.ObjectId().toHexString(),
		status: OrderStatus.Created,
		price: 20,
		userId: 'no-matter',
		version: 0,
	});
	await order.save();

	const data: OrderCancelledEvent['data'] = {
		id: order.id,
		version: 1,
		ticket: {
			id: 'no-matter',
		},
	};

	// @ts-ignore
	const msg: Message = {
		ack: jest.fn(),
	};

	return { listener, order, data, msg };
};
