import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
	requireAuth,
	validateRequest,
	BadRequestError,
	NotFoundError,
} from '@sirmctickets/commontickets';
import { Order } from '../models/order';

const router = express.Router();

router.post(
	'/app/payments',
	requireAuth,
	[body('token').not().isEmpty(), body('orderId').not().isEmpty()],
	validateRequest,
	async (req: Request, res: Response) => {
		res.send({ success: true });
	}
);
