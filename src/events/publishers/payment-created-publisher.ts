import {
	Subjects,
	PaymentCreatedEvent,
	Publisher,
} from '@sirmctickets/commontickets';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
	readonly subject = Subjects.PaymentCreated;
}
